import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { CartSideBarComponent } from './cart-side-bar/cart-side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { userData } from './userDataModel/userdata';
import { categoryData } from './userDataModel/categoryData';
import { CartData } from './userDataModel/cartData';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CartSideBarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule,userData,categoryData,CartData],
  bootstrap: [AppComponent]
})
export class AppModule { }
