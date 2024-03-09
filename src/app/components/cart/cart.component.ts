import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { CartapiService } from '../../services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: Product[] = [];
  totalAmount: number = 0;

  constructor(private cartApi: CartapiService) {}

  ngOnInit() {
    this.cartItems = this.cartApi.getCartItems();
    this.calculteTotalAmount();
  }

  calculteTotalAmount() {
    this.totalAmount = this.cartItems.reduce((total, item) => total + (item.price * item.quantity),0) 
      
  }

  removeProduct(product: Product): void {
   this.cartApi.removeCartItem(product);
   this.calculteTotalAmount();
  }

}
