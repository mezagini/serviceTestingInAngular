import { Component, OnInit } from '@angular/core';
import { ValueService } from 'src/app/services/value.service';
import { Product } from './../../models/product.model';

import { ProductsService } from './../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  limit = 10;
  offset = 0;
  status: 'loading' | 'success' | 'error' | 'init' = 'init';
  rta = '';

  constructor(
    private productsService: ProductsService,
    private _valueService: ValueService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.status = 'loading';
    this.productsService.getAll(this.limit, this.offset)
    .subscribe({
      next: products => {
        this.products = [...this.products, ...products];
        this.offset += this.limit;
        this.status = 'success';
      },
      error: () => {
        this.products = [];
        this.status = 'error';
      }
    });
  }

  async callPromise() {
    const rta = await this._valueService.getPromiseValue();
    this.rta = rta;
  }

}
