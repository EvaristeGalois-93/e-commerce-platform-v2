import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ProductData, Wishlist } from 'src/app/models/prodotti.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://127.0.0.1:8000';

  addProductToWishlist(product_id: number): Observable<ProductData> {
    const requestUrl = `${this.baseUrl}/api/products/add_to_wishlist/${product_id}`;
    return this.http.post<ProductData>(requestUrl, { product_id }).pipe(
      catchError(error => {
        console.error('Errore nella richiesta API', error);
        return throwError(() => new Error('Errore nella richiesta API'));
      })
    );
  }

  getUserWishlist(): Observable<Wishlist[]> {
    const requestUrl = `${this.baseUrl}/api/products/get_wishlist`;
    return this.http.get<Wishlist[]>(requestUrl).pipe(
      catchError((error) => {
        console.error('Errore nel recupero dei prodotti', error);
        throw new Error('Errore nella richiesta API');
      })
    );
  }

  removeProductFromWishlist(product_id: number): Observable<Wishlist> {
    const requestUrl = `${this.baseUrl}/api/products/remove_from_wishlist/${product_id}`;
    return this.http.delete<Wishlist>(requestUrl);
  }
  
  
}
