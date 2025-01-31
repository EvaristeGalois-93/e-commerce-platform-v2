import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarrelloModel, Order } from '../../models/carrello.model';
import { ProdottiModel } from '../../models/prodotti.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {

  constructor(private http: HttpClient) {}
  private baseUrl = 'http://127.0.0.1:8000';

  private cartProductsSubject = new BehaviorSubject<Order[]>([]); 
  private cartLenghtSubject = new BehaviorSubject<number>(0);

  
  cartProducts$ = this.cartProductsSubject.asObservable();
  cartLenght$ = this.cartLenghtSubject.asObservable();


  updateCartProducts(prodotti: Order[]) {
    // salvo nel localstorage per avere dati persistenti
    localStorage.setItem('prodottiCarrello', JSON.stringify(prodotti));
    
    this.cartProductsSubject.next(prodotti);
    // this.cartLenghtSubject.next(prodotti.length);
  }

  getCartProducts(): Order[] {
    return this.cartProductsSubject.getValue(); 
  }

  getCartLenght(): number {
    return this.cartLenghtSubject.getValue(); 
  }

  async GetProdottiCarrello(): Promise<CarrelloModel> {
    const requestUrl = `${this.baseUrl}/api/cart/index`;

    return new Promise((resolve, reject) => {
        this.http.get<CarrelloModel>(requestUrl).subscribe({
            next: (carrello: CarrelloModel) => {
                this.cartProductsSubject.next(carrello.orders);  
                resolve(carrello);  
            },
            error: (error) => {
                console.error('Errore nella richiesta API:', error);
                reject(error);
            }
        });
    });
}

  
  salvaProdottoSelezionatoInCarrello(prodotto_id: any) {
    return this.http.post(`${this.baseUrl}/api/cart/store`, prodotto_id);
  }

  async getProductById(id: number): Promise<ProdottiModel> {
    const requestUrl = `${this.baseUrl}/api/cart/show/${id}`;

    return new Promise((resolve, reject) => {
      const response: any = this.http.get<ProdottiModel>(requestUrl).subscribe({
        next: (response: any) => {
          resolve(response);
        },
        error: (error) => {
          console.error('ApiService.httpGet() error', response);
          reject(error);
          throw new Error('Errore nella richiesta API');
        },
      });
    });
  }

  async deleteProduct(id: number): Promise<void> {
    const requestUrl = `${this.baseUrl}/api/cart/destroy/${id}`;

    return new Promise<void>((resolve, reject) => {
      const response: any = this.http
        .delete<CarrelloModel>(requestUrl)
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (error) => {
            console.error('ApiService.httpGet() error', response);
            reject(error);
            throw new Error('Errore nella richiesta API');
          },
        });
    });
  }

  async UpdateProdottoSelezionato(
    id: number,
    prodotto: Order
  ): Promise<void> {
    const requestUrl = `${this.baseUrl}/api/cart/update/${id}`;
    return new Promise<void>((resolve, reject) => {
      const response: any = this.http
        .put<CarrelloModel>(requestUrl, prodotto)
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (error) => {
            console.error('ApiService.httpGet() error', response);
            reject(error);
            throw new Error('Errore nella richiesta API');
          },
        });
    });
  }

  clearCart() {
    // localStorage.removeItem('prodottiCarrello');
    this.cartProductsSubject.next([]);
    // this.cartLenghtSubject.next(0); 
  }
}
