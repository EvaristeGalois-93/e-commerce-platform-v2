import { Categories } from "./categories.model";
import { Filestorage } from "./filestorage.model";

export class ProdottiModel {
  current_page?: number;
  last_page?: number;
  total?: number;
  data!: ProductData[];
}

export class ProductData {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  quantity!: number;
  status!: string;
  user_id!: number;
  created_at!: string;
  updated_at!: string;
  filestorage!: Filestorage[];
  categories!: Categories[];
}

export class Wishlist {
  id!: number;
  user_id!: number;
  product_id!: number;
  product!: ProductData;
  filestorage!: Filestorage[];
  categories!: Categories[];
  created_at!: string;
  updated_at!: string;
}
