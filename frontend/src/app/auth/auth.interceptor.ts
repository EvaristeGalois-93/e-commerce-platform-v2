import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     // Recupera il token dal LoginService
     const token = this.authService.getAccessToken();

     // Clona la richiesta aggiungendo il token, se presente
     const clonedReq = token
       ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) })
       : req;
 
     // Passa la richiesta al prossimo handler e gestisce gli errori
     return next.handle(clonedReq).pipe(
       catchError((error: HttpErrorResponse) => {
         if (error.status === 401 && !req.url.includes('/auth/refresh')) {
           // Se il token è scaduto, tenta il refresh
           return this.authService.refreshToken().pipe(
             switchMap(() => {
               // Clona la richiesta originale con il nuovo token
               const newToken = this.authService.getAccessToken();
               const newRequest = req.clone({
                 setHeaders: { Authorization: `Bearer ${newToken}` }
               });
               return next.handle(newRequest);
             }),
             catchError(refreshError => {
               // Se il refresh fallisce, disconnetti l'utente
               this.authService.logout();
               this.router.navigate(['/login']);
               return throwError(refreshError);
             })
           );
         }
 
         // Altri errori
         return throwError(error);
       })
     );
    }
  }



