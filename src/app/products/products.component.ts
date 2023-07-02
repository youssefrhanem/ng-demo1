import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Array<Product>;
  errorMEssage!: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.handleGetAllProducts();
  }

  handleGetAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        this.errorMEssage = err;
      },
    });
  }

  handleDeleteProduct(p: Product) {
    let conf = confirm('Are you sure');
    if (conf == false) return;

    this.productService.deleteProduct(p.id).subscribe({
      next: (data) => {
        //this.handleGetAllProducts();
        let index = this.products.indexOf(p);
        this.products.splice(index, 1);
      },
      error: (err) => {},
    });
  }
}
