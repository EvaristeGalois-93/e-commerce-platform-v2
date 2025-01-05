import { CarrelloService } from 'src/app/pages/carrello/carrello.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginModel, RegisterModel } from '../../models/login.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private carrelloService: CarrelloService) {}
  private baseUrl = 'http://127.0.0.1:8000/api';

  // Token dell'utente
  private accessToken = new BehaviorSubject<string | null>(null);
  accessToken$ = this.accessToken.asObservable();

  // Stato di autenticazione
  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());
  isAuth$ = this.authStatus.asObservable();
  

  // Ottengo il token di accesso
  getAccessToken(): string | null {
    return this.accessToken.value || localStorage.getItem('auth_token');
  }

  // Effettuo il refresh del token
  refreshToken(): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/refresh`, {}).pipe(
      tap((response: any) => {
        this.accessToken.next(response.access_token);
        localStorage.setItem('access_token', response.access_token);
      })
    );
  }

  login(credenziali: LoginModel) {
    return this.http.post(`${this.baseUrl}/auth/login`, credenziali).pipe(
      tap((response: any) => {
        if (response) {
          localStorage.setItem('auth_token', response.authorization.token);
          sessionStorage.setItem('user', JSON.stringify(response.user));
          sessionStorage.setItem('roles', JSON.stringify(response.roles)); 
 
          this.carrelloService.GetProdottiCarrello();
          this.authStatus.next(true);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    // localStorage.removeItem('prodottiCarrello');
    this.authStatus.next(false); 
    this.accessToken.next(null);
  }

  register(credenziali: RegisterModel) {
    return this.http.post(`${this.baseUrl}/auth/register`, credenziali);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');  
  }

  getRoles(): any[] {
    const roles = sessionStorage.getItem('roles');
    return roles ? JSON.parse(roles) : []; 
  }

  hasRole(role: string): boolean {
    const roles = this.getRoles();
    return roles.find(ele => ele.name === role) !== undefined; 
}
}
