export interface TOrder {
  products: Product[];
  coupon?: string;
  shippingAddress: string;
  paymentMethod: string;
}

export interface Product {
  product: string;
  color: string;
  quantity: number;
}
