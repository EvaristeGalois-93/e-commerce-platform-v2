import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/models/prodotti.model';
import { ProdottiService } from 'src/app/pages/prodotti/prodotti.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  newProducts: ProductData[] = [];
  productGroups: any[][] = []; 

  constructor(private prodottiService: ProdottiService){
    
  }

  ngOnInit() {
    this.prodottiService.getNewProducts().subscribe((products) => {
      this.newProducts = products;
      console.log('ultimi prodotti', this.newProducts)
      this.splitIntoGroups();
    })
  }

  // Divido i prodotti in gruppi di 4
  private splitIntoGroups(): void {
    for (let i = 0; i < this.newProducts.length; i += 4) {
      this.productGroups.push(this.newProducts.slice(i, i + 4));
      console.log('gruppi ultimi prodotti', this.productGroups);
      
    }
  }
}
