import { Order } from "./carrello.model";
import { SummaryOrder } from "./summaryOrder.model";

export class PaymentModel {
    amount!: number;
    payment_method?: string;
    status!: string;
    order_id!: number;
    order?: SummaryOrder;
}