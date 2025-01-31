import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment/payment.service';

@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrls: ['./summary-order.component.css']
})
export class SummaryOrderComponent implements OnInit {

  orders: any[] = [];
  shippingData: any;
  paymentData: any;
  orderTotal: number = 0;

  constructor(private paymentService: PaymentService) {}


  ngOnInit(): void {

    // Recupera i prodotti del carrello da localStorage e fai il parsing
    const storedOrders = localStorage.getItem('prodottiCarrello');
    this.orders = storedOrders ? JSON.parse(storedOrders) : [];
    console.log('Prodotti ordine:', this.orders);


    this.paymentService.shippingData$.subscribe(data => {
      this.shippingData = data;
      console.log('Dati spedizione:', this.shippingData);
    });

    this.paymentService.paymentData$.subscribe(data => {
      this.paymentData = data;
      console.log('Dati pagamento:', this.paymentData);
    });

    this.paymentService.totalPayment$.subscribe(total => {
      this.orderTotal = total;
      console.log('Totale pagamento:', this.orderTotal);
    });

    
  }
}
