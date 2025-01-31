import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/auth/login/login.service';
import { CarrelloService } from '../carrello/carrello.service';
import { first } from 'rxjs';
import { PaymentService } from './payment.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  shippingForm: FormGroup = new FormGroup({});
  paymentForm: FormGroup = new FormGroup({});

  user: any = {};

  // ordini dell'utente
  orders: any[] = [];
  cartTotal: number = 0;
  discountedTotal = 0;
  selectedPayment: string = '';
  finalTotal: number = 0;
  

  constructor(
    private authService: LoginService, 
    private carrelloService: CarrelloService,
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private router: Router
  ) {
    this.initShippingForm();
    this.initPaymentForm();
    this.applyPromotion();
  }

  ngOnInit(): void {

    const user = JSON.parse(sessionStorage.getItem('user') || '{}'); 
    if (user) {
      this.user = user; 
      console.log('user', this.user);
    }

    // Recupera i prodotti del carrello da localStorage e fai il parsing
    const storedOrders = localStorage.getItem('prodottiCarrello');
    this.orders = storedOrders ? JSON.parse(storedOrders) : [];
    console.log('Prodotti nel carrello:', this.orders);

    this.calculateCartTotal();
  }

  initShippingForm() {
    this.shippingForm = this.fb.group({
      firstname: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]], 
      city: ['', Validators.required],
      country: ['', Validators.required],
      province: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  initPaymentForm(){
    this.paymentForm = this.fb.group({
      paymentMethod: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      cvc: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
    })
  }

  // Funzione per salvare l'indirizzo di spedizione
saveShippingAddress(): boolean {
  if (this.shippingForm.valid) {
    const shippingData = this.shippingForm.value;
    console.log('Form indirizzo salvato:', shippingData);
    // Logica per salvare l'indirizzo
    const shippingDataSubject = this.paymentService.setShippingData(shippingData); // salvare nel localStorage piuttosto che usare un subject
    console.log('subject indirizzo', shippingDataSubject);

    return true;
    
  } else {
    console.log('Form non valido');

    return false;
  }
}

addNewShippingAddress(): void {
  if (this.shippingForm.valid) {
    const newShippingData = this.shippingForm.value;
    console.log('Nuovo indirizzo aggiunto:', newShippingData);
    // Logica per aggiungere un nuovo indirizzo
  } else {
    console.log('Form non valido');
  }
}

  // Funzione per salvare l'indirizzo di spedizione
saveCardPayment(): boolean {
  console.log('paymentForm', this.paymentForm.value);
  
  if(this.paymentForm.get('paymentMethod')?.value === 'creditCard'){
    if (this.paymentForm.valid) {
      const paymentData = this.paymentForm.value;
      console.log('Form pagamento salvato:', paymentData);
      
      this.paymentService.setPaymentData(paymentData);  // considerare salvataggio nel localStorage piuttosto che usare un subject
      return true;
    } else {
      console.log('Form non valido');
      return false;
    }
  } else if(this.paymentForm.get('paymentMethod')?.value === 'cod'){
    const paymentData = this.paymentForm.value.paymentMethod;
    console.log('Form pagamento salvato:', paymentData);
    
    this.paymentService.setPaymentData(paymentData);  
    return true;
  } else return false;
}

addNewCardPayment(): void {
  if (this.paymentForm.valid) {
    const paymentData = this.paymentForm.value;
    console.log('Nuovo metodo aggiunto:', paymentData);
  } else {
    console.log('Form non valido');
  }
}

  calculateCartTotal() {
    this.cartTotal = this.orders.reduce((total, order) => {
        return total + (order.product.price * order.quantity);
    }, 0);
    console.log('Total Cart:', this.cartTotal);
    

    this.applyPromotion();
    this.calculateFinalTotal();
  }

  applyPromotion() {
    if (this.cartTotal > 300 && this.orders.length >= 3) {
      // ordino i prodotti per prezzo e sottraggo i due più economici
      const sortedOrders = [...this.orders].sort((a, b) => a.product.price - b.product.price);
      const discount = sortedOrders[0].product.price + sortedOrders[1].product.price;
      this.discountedTotal = this.cartTotal - discount;
  } else {
      this.discountedTotal = this.cartTotal;
  }
}

calculateFinalTotal() {
  this.finalTotal = this.discountedTotal;
  // aggiungo 10€ per il pagamento alla consegna
  if (this.selectedPayment === 'cod') {
      this.finalTotal += 10;
  }
}


onPaymentChange(method: string) {
  this.selectedPayment = method;
  this.updateFinalTotal();
}

updateFinalTotal() {
  if (this.selectedPayment === 'cod') {
      this.finalTotal = this.discountedTotal + 10;
  } else {
      this.finalTotal = this.discountedTotal;
  }
}

placeOrder() {
  // Logica di conferma dell'ordine
  
  // navigo alla pagina di riepilogo dell'ordine
  if(this.saveCardPayment() && this.saveShippingAddress()){
    this.paymentService.setTotalPayment(this.finalTotal);

    this.carrelloService.clearCart();
    this.router.navigate(['/order-summary']);
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Errore',
      text: 'Compila tutti i campi per procedere all\'ordine.',
      confirmButtonText: 'Ok'
    });
  }
}

}
