import "reflect-metadata";
import { plainToInstance } from 'class-transformer';

import _ from "lodash";
import { Product } from "./product.model";

declare var GLOBAL: string;

console.log(_.shuffle([1, 2, 3, 4, 5]));

console.log(GLOBAL);

const p1 = new Product("A Book", 19.99);
console.log(p1.getInformation());

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

// const loadedProducts = products.map(
//   (prod) => new Product(prod.title, prod.price)
// );

const loadedProducts = plainToInstance(Product, products);


for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
