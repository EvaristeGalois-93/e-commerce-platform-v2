import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  // Dati di spedizione
  private shippingDataSubject = new BehaviorSubject<any>(null);
  shippingData$ = this.shippingDataSubject.asObservable();

  // Dati di pagamento
  private paymentDataSubject = new BehaviorSubject<any>(null);
  paymentData$ = this.paymentDataSubject.asObservable();

  // Totale Ordine
  private totalPaymentSubject = new BehaviorSubject<number>(0);
  totalPayment$ = this.totalPaymentSubject.asObservable();

  // Aggiorno i dati di spedizione
  setShippingData(shippingData: any): void {
    this.shippingDataSubject.next(shippingData);
  }

  // Aggiorno i dati di pagamento
  setPaymentData(paymentData: any): void {
    this.paymentDataSubject.next(paymentData);
  }

  setTotalPayment(totalPayment: number): void {
    this.totalPaymentSubject.next(totalPayment);
  }

  getShippingData() {
    return this.shippingDataSubject.value;
  }

  getPaymentData() {
    return this.paymentDataSubject.value;
  }
}
