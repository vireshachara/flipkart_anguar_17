import { Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';

export const routes: Routes = [
    {path:'', redirectTo:'products', pathMatch:'full'},
    // {path:'', component:ProductsComponent},
    {path:'products', component:ProductsComponent},
    {path:'cart', component:CartComponent}
];
