import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdottiModel, ProductData } from '../../models/prodotti.model';
import { BehaviorSubject, catchError, filter, Observable, throwError } from 'rxjs';
import { Categories } from 'src/app/models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://127.0.0.1:8000';

  private filteredProductsSubject = new BehaviorSubject<ProductData[]>([]);
  filteredProducts$ = this.filteredProductsSubject.asObservable();

  // ottimizzo immagini con libreria Canvas
  resizeImage(imageUrl: string, width: number, height: number): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous"; 

        img.src = imageUrl;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0, width, height);

            try {
                const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
                resolve(dataUrl);
            } catch (error) {
                reject(error);
            }
        };

        img.onerror = (error) => {
            reject(error); 
        };
    });
}


  updateFilteredProducts(products: ProductData[]) {
    this.filteredProductsSubject.next(products);
  }

  async GetProducts(page: number = 1): Promise<ProdottiModel> {
    return new Promise((resolve, reject) => {
      const requestUrl = `${this.baseUrl}/api/products/index?page=${page}`;

      const response: any = this.http.get(requestUrl).subscribe({
        next: (response: any) => {
          resolve(response);
        },
        error: (error) => {
          console.error('ApiService.httpGet() error', error);
          reject(error);
          throw new Error('Errore nella richiesta API');
        },
      });
    });
  }

  GetProductByID(id: number): Observable<ProductData> {
    const requestUrl = `${this.baseUrl}/api/products/show/${id}`;
    return this.http.get<ProductData>(requestUrl).pipe(
      catchError((error) => {
        console.error('Errore nel recupero del prodotto', error);
        throw new Error('Errore nella richiesta API');
      })
    );
  }

  async addProductToCart(product_id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const requestUrl = `${this.baseUrl}/api/cart/addProductToCart/${product_id}`;

      const response: any = this.http.post(requestUrl, product_id).subscribe({
        next: (response: any) => {
          resolve(response);
        },
        error: (error) => {
          console.error('ApiService.httpGet() error', error);
          reject(error);
          throw new Error('Errore nella richiesta API');
        },
      });
    });
  }

  GetCategories(): Observable<Categories[]> {
    const requestUrl = `${this.baseUrl}/api/products/getCategories`;
    return this.http.get<Categories[]>(requestUrl).pipe(
      catchError((error) => {
        console.error('Errore nel recupero del prodotto', error);
        throw new Error('Errore nella richiesta API');
      })
    );
  }

  filterSearch(params: { filter_search: string, category_id: number }): Observable<ProductData[]> {
    const requestUrl = `${this.baseUrl}/api/products/filter_search`;
  
    let queryParams = new HttpParams()
      .set('filter_search', params.filter_search)
      .set('category_id', params.category_id.toString());
  
    // Restituisce direttamente l'Observable
    return this.http.get<ProductData[]>(requestUrl, { params: queryParams }).pipe(
      catchError(error => {
        console.error('ApiService.httpGet() error', error);
        return throwError(() => error); 
      })
    );
  }
  
}


