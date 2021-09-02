import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsMainRoutingModule } from './products-main-routing.module';
import { ProductsMainComponent } from './products-main.component';
import { MenuSideBarComponent } from '../menu-side-bar/menu-side-bar.component';


@NgModule({
  declarations: [
    ProductsMainComponent,
    MenuSideBarComponent
  ],
  imports: [
    CommonModule,
    ProductsMainRoutingModule
  ]
})
export class ProductsMainModule { }
