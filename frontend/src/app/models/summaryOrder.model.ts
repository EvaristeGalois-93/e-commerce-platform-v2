import { ProductData } from "./prodotti.model";
import { UserModel } from "./user.model";

// ordine effettuato dopo pagamento
export class SummaryOrder {
    status!: string;
    total!: number;
    user_id!: number;
    user?: UserModel
}

export class OrderProducts{
    order_id!: number;
    product_id!: number;
    quantity!: number;
    order?: SummaryOrder;
    product?: ProductData;
}