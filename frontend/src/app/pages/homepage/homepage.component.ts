import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/login/login.service';
import { ProductData } from 'src/app/models/prodotti.model';
import { ProdottiService } from '../prodotti/prodotti.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {

  isAuth: boolean = false;
  user:any = {};

  constructor(
    private router: Router, 
    private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.isAuth$.subscribe(isAuthenticated => {
      this.isAuth = isAuthenticated;
      console.log('isAuth', this.isAuth);
    });
    const user = JSON.parse(sessionStorage.getItem('user') || '{}'); // Recupera l'utente dalla sessione
    if (user) {
      this.user = user; 
      console.log('user', this.user);
    }
    let roles = this.loginService.getRoles();
    console.log('roles', roles);
  }

  login() {
    return this.router.navigate(['/login']);
  }

  homepage() {
    return this.router.navigate(['/homepage']);
  }

  goToProducts() {
    return this.router.navigate(['/products']);
  }

  hasRole(role: string): boolean {    
    const roles= this.loginService.hasRole(role);
    console.log('roles', roles);
    return roles;
  }

}
