import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public totalItem :number = 0;

  public searchTerm: string = "";

  constructor(private cart:CartService){}

  ngOnInit(): void{
    ////////////////////////////////////////////////////
    this.cart.getProducts()
    .subscribe(res => {
      this.totalItem = res.length;
    })
  }

  search(event : any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cart.search.next(this.searchTerm);
  }
}
