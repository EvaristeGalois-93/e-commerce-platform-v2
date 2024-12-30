import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarrelloModel, Order } from '../../models/carrello.model';
import { CarrelloService } from './carrello.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
})
export class CarrelloComponent implements OnInit {
  prodottiCarrello: Order[] = []
  prodottoDaModificare: CarrelloModel | null = null;
  profileForm: FormGroup;
  quantity = 0;
  carrelloLength: number = 0;
  isLoading: boolean = false;


  constructor(
    private fb: FormBuilder,
    private carrelloService: CarrelloService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      quantity: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  ngOnInit() {
    this.ottieniProdottiCarrello();
  }

  ottieniProdottiCarrello() {
    this.isLoading = true;
    this.carrelloService
      .GetProdottiCarrello()
      .then((prodotti: any) => {
        this.prodottiCarrello = prodotti.orders;
        console.log('Prodotti nel carrello:', this.prodottiCarrello);
        
        this.isLoading = false;

        // salvo i prodotti nel localstorage
        localStorage.setItem('prodottiCarrello', JSON.stringify(this.prodottiCarrello));

      //   this.carrelloService.updateCartProducts(this.prodottiCarrello);

      //   this.carrelloService.cartProducts$.subscribe((cartProduct) => {
      //   console.log('Valore del BehaviorSubject dopo aggiornamento:', cartProduct);
      // });
        
      })
      .catch((error) => {
        console.error('Errore durante il recupero dei prodotti:', error);
      });
  }

  calculateTotalPrice(): number {
    return this.prodottiCarrello.reduce((total, order) => {
      return total + (order.product.price * order.quantity);
    }, 0);
  }


  deleteProduct(i: number) {
    if (!this.prodottiCarrello || !this.prodottiCarrello || this.prodottiCarrello.length <= i) {
      console.error('Prodotto da eliminare non definito o indice non valido.');
      return;
    }

    Swal.fire({
      title: 'Sei sicuro?',
      text: 'Vuoi davvero eliminare questo prodotto dal carrello?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sì, elimina!',
      cancelButtonText: 'Annulla',
    }).then((result) => {
      if (result.isConfirmed) {
        const productToDeleteId = this.prodottiCarrello[i].id;  

        this.carrelloService
          .deleteProduct(productToDeleteId)
          .then(() => {
            this.prodottiCarrello = this.prodottiCarrello.filter(
              (order) => order.id !== productToDeleteId
            );

            this.carrelloService.updateCartProducts(this.prodottiCarrello);

            console.log('Valore del BehaviorSubject dopo eliminazione:', this.carrelloService.getCartProducts());

            Swal.fire({
              title: 'Eliminato!',
              text: 'Il prodotto è stato rimosso dal carrello.',
              icon: 'success',
              timer: 2000,
            });

            this.profileForm.reset();
          })
          .catch((error) => {
            console.error('Errore durante l\'eliminazione del prodotto:', error);

            Swal.fire({
              title: 'Errore!',
              text: 'Si è verificato un errore durante l\'eliminazione del prodotto.',
              icon: 'error',
            });
          });
      }
    });
  }

}


// goToCheckout() {
  //   this.router.navigate(['/pagamento']);  
  // }

  // updateProduct(prodotto: CarrelloModel) {
  //   this.prodottoDaModificare = prodotto;
  //   this.profileForm.setValue({
  //     quantity: prodotto.quantity || 0,
  //   });
  // }

  // updateSelectedProduct() {
  //   if (this.prodottoDaModificare) {
  //     const updatedProduct: CarrelloModel = {
  //       ...this.prodottoDaModificare,
  //       quantity: this.profileForm.value.quantity,
  //     };

  //     this.carrelloService
  //       .UpdateProdottoSelezionato(updatedProduct.id, updatedProduct)
  //       .then(() => {
  //         console.log('Prodotto aggiornato', updatedProduct);
  //         const index = this.prodottiCarrello.findIndex(
  //           (p: CarrelloModel) => p.id === this.prodottoDaModificare!.id
  //         );
  //         if (index !== -1) {
  //           this.prodottiCarrello[index] = updatedProduct;
  //         }
  //         this.profileForm.reset();
  //         this.prodottoDaModificare = null;
  //       })
  //       .catch((error) => {
  //         console.error("Errore durante l'aggiornamento del prodotto:", error);
  //       });
  //   }
  // }
