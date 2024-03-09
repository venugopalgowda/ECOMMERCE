import { Component } from '@angular/core';
import { CartapiService } from '../services/cartapi.service';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productList: Product[] = [];
   constructor(private cartApi: CartapiService) {

   }

   ngOnInit() {
    this.cartApi.fetchProducts().subscribe(product => {
        this.productList = product;
    })
   }

   addToCart(product: Product): void {
     this.cartApi.addToCart(product);
   }
}
