import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [RouterLink, FormsModule, ReactiveFormsModule]
})
export class ProductsComponent implements OnInit {

  public productList : any[] = [];

  public filterCategory : any;

  searchKey: string = "";

  filterKey : any [] =[];

  constructor(private api:ApiService, private cart: CartService){}

  ngOnInit(): void{
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
      this.filterCategory = res;

      //////////////////////////////////////////////////////////
      this.productList.forEach((a : any) => {
        if(a.category === "men's clothing" || a.category === "women's clothing"){
          a.category = 'fashion';;
          // console.log(this.productList);
        }
        Object.assign(a, {quantity :1, total:a.price});
      });
      console.log(this.productList);
    })

    this.cart.search.subscribe(val => {
      this.searchKey = val
    })
  }

  //////////////////////////////////////////////////////////
  addToCart(item : any){
    this.cart.addToCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList.filter((a: any) => {
      if(a.category == category || category == ''){
        return a;
      }
    })
  }

}
