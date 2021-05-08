import { seller } from "./seller"

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: seller;
}

export type SalePage = {
  content?: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  size?: number;
  number: number;
  numberOfElements?: number;
  first: boolean;
  empty?: boolean; //? serve para informar que nao é obrigatorio
}
export type SaleSum = {
  sellerName: string;
  sum: number;
}

export type SaleSuccess = {
  sellerName : string;
  visited: number;
  deals : number;
}