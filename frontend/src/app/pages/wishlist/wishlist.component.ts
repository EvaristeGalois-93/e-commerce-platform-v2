import { CarrelloModel } from './../../models/carrello.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from './wishlist.service';
import { Wishlist } from 'src/app/models/prodotti.model';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from 'src/app/auth/login/login.service';
import { CarrelloService } from '../carrello/carrello.service';
import { ProdottiService } from '../prodotti/prodotti.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlistProducts: Wishlist[] = [];

  constructor(
    private router: Router, 
    private wishlistService: WishlistService,
    private loginService: LoginService,
    private carrelloService: CarrelloService,
    private prodottiService: ProdottiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getUserWishlist();
  }

  getSafeImageUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


  getUserWishlist(): void {
    this.wishlistService.getUserWishlist().subscribe({
      next: (products) => {
        this.wishlistProducts = products;
        console.log('Lista desideri:', this.wishlistProducts);
        console.log('immagini prodotti', this.wishlistProducts.map(ele => ele.product.filestorage[0].path));
      },
      error: (error) => {
        console.error('Errore durante il caricamento della lista desideri:', error);
        Swal.fire({
          icon: 'error',
          title: 'Errore',
          text: 'Non è stato possibile caricare la lista desideri.',
          confirmButtonText: 'Ok'
        });
      }
    });
  }


  async addToCart(prodottoID: number) {
    const isAuth = this.loginService.isAuthenticated();
    if (isAuth) {

        const carrello = await this.carrelloService.GetProdottiCarrello();
        const cartProducts = carrello.orders;  

        const existingProduct = cartProducts.find(order => order.product_id === prodottoID);
        if (existingProduct) {
            Swal.fire({
                icon: 'info',
                title: 'Prodotto già presente',
                text: 'Hai già aggiunto il prodotto al carrello!',
                confirmButtonText: 'Ok'
            });
            return;
        } else {
            try {
                const prodottoAggiunto = await this.prodottiService.addProductToCart(prodottoID);
                
                carrello.orders.push(prodottoAggiunto); 
                this.carrelloService.updateCartProducts(carrello.orders); 

                Swal.fire({
                    icon: 'success',
                    title: 'Prodotto aggiunto',
                    text: 'Il prodotto è stato aggiunto al carrello con successo!',
                    confirmButtonText: 'Ok'
                });
            } catch (error) {
                console.error("Errore durante l'inserimento nel carrello:", error);
            }
        }
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Vuoi aggiungere il prodotto al carrello?',
            text: 'Registrati o effettua l\'accesso!',
            confirmButtonText: 'Accedi',
            showCancelButton: true,
            cancelButtonText: 'Annulla',
            cancelButtonColor: '#d33',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                this.router.navigate(['/login']);
            }
        });
    }
}


  removeFromWishlist(productId: number): void {
    this.wishlistService.removeProductFromWishlist(productId).subscribe(() => {
      // this.wishlistProducts = this.wishlistProducts.filter(product => product.id !== productId);
      this.getUserWishlist();
      Swal.fire({
        icon: 'info',
        title: 'Prodotto rimosso',
        text: 'Prodotto rimosso dalla lista desideri!',
        confirmButtonText: 'Ok'
      });
    });
  }

}
