import { ProdottiModel, ProductData } from './prodotti.model';

// carrello 
export class CarrelloModel {
  orders: Order[] = [];
}

// prodotto aggiunto al carrello
export class Order {
  id!: number;
  quantity!: number;
  user_id!: number;
  product_id!: number;
  product!: ProductData;
}




