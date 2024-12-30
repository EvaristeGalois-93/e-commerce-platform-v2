import { filter } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/login/login.service';
import { Categories } from 'src/app/models/categories.model';
import { CarrelloService } from 'src/app/pages/carrello/carrello.service';
import { ProdottiService } from 'src/app/pages/prodotti/prodotti.service';
import { ProductData } from 'src/app/models/prodotti.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() inProduct: boolean = false;
  @Input() items: number = 0;

  prodottiCarrello: any;
  isAuth: boolean = false;
  categories: Categories[] = [];
  filteredProducts: ProductData[] = [];
  searchForm: FormGroup = new FormGroup({});
  selectedCategory: Categories | null = null;

  isCategoriesVisible = false;

  constructor(
    private router: Router,
    private carrelloService: CarrelloService,
    private loginService: LoginService,
    private prodottiService: ProdottiService,
    private fb: FormBuilder 
  ) {}

  ngOnInit() {
    this.loginService.isAuth$.subscribe(isAuthenticated => {
      this.isAuth = isAuthenticated;
      console.log('isAuth', this.isAuth);
    });

    this.prodottiService.GetCategories().subscribe((categories: Categories[]) => {
      this.categories = categories;
    })

    this.initSearchForm();
    this.onValueChanges();
    this.ottieniTotaleCarrello();
  }

  initSearchForm() {
    this.searchForm = this.fb.group({
      category_id: [0], 
      filter_search: [''] 
  });
}

onValueChanges() {
  this.searchForm.get('category_id')?.valueChanges.subscribe(value => {
    console.log('Categoria selezionata:', value);
    this.filterProducts(); 
  });

  this.searchForm.get('filter_search')?.valueChanges.subscribe(value => {
    console.log('Ricerca:', value);
    this.filterProducts(); 
  });
}



filterProducts() {
  const filterData = {
    category_id: this.searchForm.get('category_id')?.value || -1,  
    filter_search: this.searchForm.get('filter_search')?.value || ''
  };

  this.prodottiService.filterSearch(filterData).subscribe((response: any) => {
    this.filteredProducts = response.data;
    console.log('prodotti filtrati', this.filteredProducts);
    
    this.prodottiService.updateFilteredProducts(this.filteredProducts);
  });
}



  ottieniTotaleCarrello() {
    this.carrelloService
      .GetProdottiCarrello()
      .then((prodotti: any) => {
        console.log('Prodotti recuperati:', prodotti);
        this.prodottiCarrello = prodotti.orders;
        this.items = this.prodottiCarrello.length;
        // this.items = this.carrelloService.getCartProducts().length;

      })
      .catch((error) => {
        console.error('Errore durante il recupero dei prodotti:', error);
      });
  }

  login() {
    this.router.navigate(['/login']);
    // this.ottieniTotaleCarrello();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  homepage() {
    this.router.navigate(['/homepage']);
    // this.ottieniTotaleCarrello();
  }

  goToItems() {
    this.router.navigate(['/prodotti']);
  }

  goToWishlist() {
    this.router.navigate(['/wishlist']);
  }

  goToCart() {
    this.router.navigate(['/ordini']);
  }


  showCategories() {
    this.isCategoriesVisible = true;
  }

  hideCategories() {
    this.isCategoriesVisible = false;
  }

}
