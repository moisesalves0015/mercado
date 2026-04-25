/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Category {
  BEBIDAS = "Bebidas",
  ALIMENTOS = "Alimentos",
  LIMPEZA = "Limpeza",
  HIGIENE = "Higiene"
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  unit: string;
}

export interface CartItem extends Product {
  quantity: number;
}
