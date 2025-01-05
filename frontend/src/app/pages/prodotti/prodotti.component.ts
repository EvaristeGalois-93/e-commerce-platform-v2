import { WishlistService } from './../wishlist/wishlist.service';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProdottiModel, ProductData } from '../../models/prodotti.model';
import { ProdottiService } from './prodotti.service';
import { CarrelloService } from '../carrello/carrello.service';
import Swal from 'sweetalert2';
import { CarrelloModel } from '../../models/carrello.model';
import { LoginService } from 'src/app/auth/login/login.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css'],
})
export class ProdottiComponent implements OnInit {

  prodotti: ProductData[] = [];
  filteredProducts!: Subscription;
  wishlistProductIds: number[] = []; 



  // paginazione prodotti
  totalProducts: number = 0;
  currentPage: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // cartProducts: CarrelloModel[] = [];
  catalogo_prodotti: string = '';
  isLoading: boolean = false;
  isAuth: boolean = false;
  message: string = '';
  isWishList: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private prodottiService: ProdottiService,
    private carrelloService: CarrelloService,
    private loginService: LoginService,
    private wishlistService: WishlistService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.ottieniProdotti();
    this.isAuth = this.loginService.isAuthenticated();
    if(this.isAuth){
      this.getWishlist();
    }
    this.filteredProducts = this.prodottiService.filteredProducts$.subscribe(products => {
        // sovrascrivo l'array di prodotti quando ci sono nuovi prodotti filtrati
        this.prodotti = products;
        console.log('prodotti filtrati', products);
    });
    if(this.prodotti.length === 0){
      this.message = 'Nessun prodotto trovato';
    }
  }

  ngOnDestroy() {
    if (this.filteredProducts) {
      this.filteredProducts.unsubscribe();
    }
  }

  getSafeImageUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getWishlist(): void {
    this.wishlistService.getUserWishlist().subscribe((wishlistProducts) => {
      this.wishlistProductIds = wishlistProducts.map(ele => ele.product_id); 
      console.log('lista desideri utente', this.wishlistProductIds);
    });
  }

  ottieniProdotti(page: number = 0) {
    this.isLoading = true;
    this.prodottiService.GetProducts(page+1).then((response: ProdottiModel) => {      
      this.prodotti = response.data;
      console.log('prodotti', this.prodotti);
      this.totalProducts = response.total!;
      this.currentPage = response.current_page!;      
      this.isLoading = false;

      // this.resizeProductImages();

    });
  }

  resizeProductImages() {
    this.prodotti.forEach((prodotto, index) => {
      const imageUrl = prodotto.filestorage[0].path;

      this.prodottiService.resizeImage(imageUrl, 200, 200).then((resizedImageUrl: string) => {
        this.prodotti[index].filestorage[0].path = resizedImageUrl;
      });
    });
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex;
    // this.pageSize = event.pageSize;
    this.ottieniProdotti(this.currentPage); 
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


toggleWishlist(prodottoID: number): void {
  if (this.wishlistProductIds.includes(prodottoID)) {
    // Se il prodotto è già nella lista, rimuovilo
    this.wishlistService.removeProductFromWishlist(prodottoID).subscribe(() => {
      // Rimuovi l'ID del prodotto dall'array wishlistProductIds
      this.wishlistProductIds = this.wishlistProductIds.filter(id => id !== prodottoID);
      Swal.fire({
        icon: 'info',
        title: 'Prodotto rimosso',
        text: 'Prodotto rimosso dalla Lista Desideri!',
        confirmButtonText: 'Ok'
      });
    });
  } else {
    // Se il prodotto non è nella lista, aggiungilo
    this.wishlistService.addProductToWishlist(prodottoID).subscribe(() => {
      this.wishlistProductIds.push(prodottoID); 
      Swal.fire({
        icon: 'success',
        title: 'Prodotto aggiunto',
        text: 'Prodotto aggiunto alla Lista Desideri!',
        confirmButtonText: 'Ok'
      });
    });
  }
}



  isProductInWishlist(prodottoID: number): boolean {
    return this.wishlistProductIds.includes(prodottoID); 
  }

}
