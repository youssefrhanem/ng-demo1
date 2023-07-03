import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products!: Array<Product>;

  constructor() {
    this.products = [
      { id: 1, name: 'Container Clear 8 Oz', price: 3, promotion: true },
      {
        id: 2,
        name: 'Pastry - Apple Muffins - Mini',
        price: 70,
        promotion: false,
      },
      {
        id: 3,
        name: 'Wine - Barbera Alba Doc 2001',
        price: 54,
        promotion: false,
      },
      {
        id: 4,
        name: 'Syrup - Monin - Granny Smith',
        price: 89,
        promotion: true,
      },
      { id: 5, name: 'Pork - Sausage, Medium', price: 82, promotion: true },
      {
        id: 6,
        name: 'Wine - Saint Emilion Calvet',
        price: 19,
        promotion: false,
      },
      { id: 7, name: 'Bag Clear 10 Lb', price: 44, promotion: false },
      {
        id: 8,
        name: 'Wine - Puligny Montrachet A.',
        price: 30,
        promotion: true,
      },
      { id: 9, name: 'Tea - Jasmin Green', price: 79, promotion: false },
      { id: 10, name: 'Beer - Mcauslan Apricot', price: 65, promotion: false },
      {
        id: 11,
        name: 'Wine - Zinfandel Rosenblum',
        price: 16,
        promotion: true,
      },
      { id: 12, name: 'Beef - Roasted, Cooked', price: 8, promotion: false },
      { id: 13, name: 'Amarula Cream', price: 30, promotion: false },
      { id: 14, name: 'Veal - Provimi Inside', price: 26, promotion: false },
      {
        id: 15,
        name: 'Soup Knorr Chili With Beans',
        price: 8,
        promotion: true,
      },
      { id: 16, name: 'Vaccum Bag - 14x20', price: 35, promotion: false },
      {
        id: 17,
        name: 'Bread Cranberry Foccacia',
        price: 87,
        promotion: true,
      },
      { id: 18, name: 'Cream - 35%', price: 67, promotion: true },
      {
        id: 19,
        name: 'Lemonade - Strawberry, 591 Ml',
        price: 52,
        promotion: false,
      },
      { id: 20, name: 'Muffin Mix - Blueberry', price: 56, promotion: true },
    ];
  }

  public getAllProducts(): Observable<Product[]> {
    let rnd = Math.random();
    if (rnd < 0.1) return throwError(() => new Error('internet error'));
    else return of(this.products);
  }

  public deleteProduct(id: number): Observable<Boolean> {
    this.products = this.products.filter((p) => p.id != id);
    return of(true);
  }

  public setPromotion(id: number): Observable<Boolean> {
    let product = this.products.find((p) => p.id == id);
    if (product != undefined) {
      product.promotion = !product.promotion;
      return of(true);
    } else return throwError(() => new Error('Product not found'));
  }
}
