import { UserModel } from "./user.model";

export class ShippingModel {
  address_line1!: string;
  address_line2?: string;
  city!: string;
  state?: string;
  country!: string;
  zip_code!: number;
  phone_number?: string;
  user_id!: number;
  user?: UserModel
}