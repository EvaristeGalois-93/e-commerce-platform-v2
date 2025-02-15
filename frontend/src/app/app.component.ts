import { Component, HostListener } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CarrelloModel } from './models/carrello.model';
import { CarrelloService } from './pages/carrello/carrello.service';
import { filter } from 'rxjs';
import { LoginService } from './auth/login/login.service';
import { ProdottiService } from './pages/prodotti/prodotti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  items = 0;
  prodottiCarrello: any;
  inProduct: boolean = false;

  isLoading: boolean = false;


  constructor(
    private router: Router,
    private carrelloService: CarrelloService,
    private loginService: LoginService,
    private prodottiService: ProdottiService
  ) {
    // document.body.style.cursor = 'none';
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;  
      } else if (event instanceof NavigationEnd) {
        this.isLoading = false; 
      }
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // se la rotta non è '/prodotti', resetto i prodotti filtrati
        if (event.urlAfterRedirects !== '/prodotti') {
          this.prodottiService.updateFilteredProducts([]);
        }
        // se la rotta è '/prodotti', imposto inProduct a true
        this.inProduct = event.urlAfterRedirects === '/prodotti';
      });
  
    this.carrelloService.cartProducts$.subscribe((prodotti) => {
      this.items =  prodotti.length;
    }); 
  }
}
