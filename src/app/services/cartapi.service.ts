import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { NotificationService } from './notification.service';


@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  private cartItem: Product[] = [];
  private storageKey = 'cartItems';
  cartItems: any;
  constructor(private http: HttpClient, private notificationService: NotificationService) {
    const storedItems = localStorage.getItem(this.storageKey);
    if (storedItems) {
      if (storedItems) {}
    }
   }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
  addToCart(product: Product) {
   const existingItem = this.cartItem.find(item => item.id === product.id);
   if (existingItem) {
    existingItem.quantity +=1;
     this.notificationService.showSucess(`${product.title} already in the cart.
     Quantity Updated: ${existingItem.quantity}`)
   } else {
    product.quantity = 1;
    this.cartItem.push(product);
    this.notificationService.showSucess(`${product.title} added in the cart`);
   }
   localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  getCartItemCount() {
    return this.cartItem.length;
  }
  getCartItems(): Product[] {
    return this.cartItem;

  }
  removeCartItem(product: Product): void{
    const index = this.cartItem.findIndex(item => item.id === product.id);
   if( index !== -1) {
    this.cartItem.splice(index, 1);
    this.notificationService.showSucess('Product Removed From The Cart');
   }
  }
}

