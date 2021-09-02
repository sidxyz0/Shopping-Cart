import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartSideBarComponent } from './cart-side-bar/cart-side-bar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartSideBarComponent },
  { path: 'productsMain', loadChildren: () => import('./products-main/products-main.module').then(m => m.ProductsMainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
