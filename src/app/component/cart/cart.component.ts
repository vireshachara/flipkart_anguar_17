import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  public product : any = [];

  public grandTotal !: number;


  constructor(private cart : CartService){}

  ngOnInit(): void {
    this.cart.getProducts()
    .subscribe(res => {
      this.product = res;
      this.grandTotal = this.cart.getTotalPrice();
    })
  }

  removeItem(item : any){
    this.cart.removeCartItem(item);
  }

  emptyCart(){
    this.cart.removeAllCart();
  }
}
