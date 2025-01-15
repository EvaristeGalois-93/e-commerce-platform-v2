import Swal from 'sweetalert2';
import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/login/login.service';
import { Categories } from 'src/app/models/categories.model';
import { CarrelloService } from 'src/app/pages/carrello/carrello.service';
import { ProdottiService } from 'src/app/pages/prodotti/prodotti.service';
import { ProductData } from 'src/app/models/prodotti.model';

interface CustomEvent extends Event {
  target: HTMLSelectElement;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('categoryOption', { static: false }) categoryOption!: ElementRef<HTMLSelectElement>;

  @Input() inProduct: boolean = false;
  @Input() items: number = 0;

  prodottiCarrello: any;
  isAuth: boolean = false;
  categories: Categories[] = [];
  filteredProducts: ProductData[] = [];
  searchForm: FormGroup = new FormGroup({});
  selectedCategory: Categories | null = null;
  

  isCategoriesVisible = false;
  selectWidth: string = 'auto';

  constructor(
    private router: Router,
    private carrelloService: CarrelloService,
    private loginService: LoginService,
    private prodottiService: ProdottiService,
    private fb: FormBuilder 
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.categoryOption?.nativeElement) {
        const selectElement = this.categoryOption.nativeElement;
        const defaultEvent = { target: selectElement } as CustomEvent;
        this.updateSelectWidth(defaultEvent);
      }
    });
  }


  ngOnInit() {
    this.loginService.isAuth$.subscribe(isAuthenticated => {
      this.isAuth = isAuthenticated;
      console.log('isAuth', this.isAuth);
      if(this.isAuth){
        this.ottieniTotaleCarrello();
      }
    });

    this.prodottiService.GetCategories().subscribe((categories: Categories[]) => {
      this.categories = categories;
    })

    this.initSearchForm();
    this.onValueChanges();
    // this.ottieniTotaleCarrello();
  }

  initSearchForm() {
    this.searchForm = this.fb.group({
      category_id: [0], 
      filter_search: [''] 
  });
}

onValueChanges() {
  this.searchForm.get('category_id')?.valueChanges.subscribe(value => {
    // console.log('Categoria selezionata:', value);
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
    // console.log('prodotti filtrati', this.filteredProducts);
    
    this.prodottiService.updateFilteredProducts(this.filteredProducts);
    
  });
}



  ottieniTotaleCarrello() {
    this.carrelloService
      .GetProdottiCarrello()
      .then((prodotti: any) => {
        // console.log('Prodotti recuperati:', prodotti);
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
    Swal.fire({
      title: 'Sei sicuro?',
      text: 'Vuoi davvero effettuare il logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sì, esci!',
      cancelButtonText: 'Annulla',
    }).then((result) => {
      if (result.isConfirmed) {
        this.loginService.logout();
        this.router.navigate(['/login']);
        Swal.fire('Logout!', 'Hai effettuato il logout con successo.', 'success');
      }
    });
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

  updateSelectWidth(event: Event) {    
    // ottengo l'elemento select
    const selectElement = event.target as HTMLSelectElement;
    console.log('selectElement', selectElement);
    
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    console.log('selectedOption', selectedOption);
    
    
    // Creare un elemento temporaneo per calcolare la larghezza
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.textContent = selectedOption.textContent || '';
    document.body.appendChild(tempSpan);

    // lunghezza = larghezza testo + padding
    const width = tempSpan.offsetWidth + 50; 
    this.selectWidth = `${width}px`;

    console.log('larghezza elemento', tempSpan.offsetWidth);
    console.log('larghezza select', this.selectWidth);
    

    // Rimuovi l'elemento temporaneo
    document.body.removeChild(tempSpan);
  }

}
