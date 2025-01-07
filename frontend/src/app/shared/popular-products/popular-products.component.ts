import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/models/prodotti.model';
import { ProdottiService } from 'src/app/pages/prodotti/prodotti.service';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.css']
})
export class PopularProductsComponent implements OnInit{

  mostpopularProducts: ProductData[] = [];
  productGroups: any[][] = []; // Array di gruppi (ognuno con max 4 prodotti)



  categoryDescriptions: { [key: string]: string } = {
    "Elettronica": "Scopri i migliori gadget tecnologici per la tua vita quotidiana.",
    "Prodotti per Ufficio": "Ii migliori prodotti per ufficio scelti dai nostri clienti.",
    "Informatica": "Scopri le ultime novità in ambito informatico.",
    "Cd e Vinili": "Acquista i migliori vinili in commercio",
    "Film e TV": "Hai bisogno di relax? Abbiamo la TV che fa al caso tuo!",
    "Musica Digitale": "Ascolta le ultime novità del panorama musicale italiano."
  };


  constructor(private prodottiService: ProdottiService){

  }

  ngOnInit() {
    this.prodottiService.getMostPopularProducts().subscribe((products) => {
      this.mostpopularProducts = products;
      console.log('prodotti più popolari', this.mostpopularProducts)
      this.splitIntoGroups();
    })
  }

  // Divido i prodotti in gruppi di 4
  private splitIntoGroups(): void {
    for (let i = 0; i < this.mostpopularProducts.length; i += 4) {
      this.productGroups.push(this.mostpopularProducts.slice(i, i + 4));
      console.log('gruppi prodotti popolari', this.productGroups);
      
    }
  }

  getDescription(category: string): string {
    return this.categoryDescriptions[category] || this.categoryDescriptions['default'];
  }
}
