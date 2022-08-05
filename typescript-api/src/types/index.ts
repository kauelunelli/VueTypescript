export interface IProduct {
  id?: number;
  product: string;
  description: string;
  categories: string;
  brand: string;
  countryOrigin: string;
  price: string;
  promo: string;
  validity: string;
  temperature: string;
}

export interface IProductResponseArray {
  data: IProduct[];
}

export interface IProductResponseObject {
  data: IProduct;
}

export interface IMessage {
  showMessage: boolean;
  msg: string
}