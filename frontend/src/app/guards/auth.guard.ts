// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from '../auth/login/login.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {

  const loginService = inject(LoginService); 
  const router = inject(Router); 

  const isAuthenticated = loginService.isAuthenticated(); 

  if (!isAuthenticated) {
    if (state.url !== '/login') {
      router.navigate(['/login']);
    }
    return false;
  }
  
  return true;
};


