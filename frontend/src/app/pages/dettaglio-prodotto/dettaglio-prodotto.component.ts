import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottiModel, ProductData } from 'src/app/models/prodotti.model';
import { ProdottiService } from '../prodotti/prodotti.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.component.html',
  styleUrls: ['./dettaglio-prodotto.component.css']
})
export class DettaglioProdottoComponent {

  prodotto_id: number = 0;
  // prodotto!:ProductData;
  prodotto$: Observable<ProductData> = new Observable();
  selectedIndex: number = 0;

  constructor(private route: ActivatedRoute, private prodottiService: ProdottiService) { }

  ngOnInit(): void {

    console.log('prodotto', this.prodotto$);
    
    this.prodotto_id = +(this.route.snapshot.paramMap.get('prodotto_id') ?? 0);
    this.prodotto$ = this.prodottiService.GetProductByID(this.prodotto_id); 


    // this.prodottiService.GetProductByID(this.prodotto_id).subscribe({
    //   next: (data) => {
    //     this.prodotto = data;
    //   },
    //   error: (error) => {
    //     console.error('Errore nel recupero del prodotto', error);
    //   },
    // });
  }

  changeImage(i: number): void {
    console.log('index',i);
    
    this.selectedIndex = i;
  }
}

