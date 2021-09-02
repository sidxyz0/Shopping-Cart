import { Component, OnInit } from '@angular/core';
import { DataPassingService } from '../data-passing.service';
import { CartData } from '../userDataModel/cartData';


@Component({
  selector: 'app-cart-side-bar',
  templateUrl: './cart-side-bar.component.html',
  styleUrls: ['./cart-side-bar.component.css']
})
export class CartSideBarComponent implements OnInit {

  subscription1:any;
  subscription2:any;
  cart:any;
  constructor(private dataservice: DataPassingService, private cartData:CartData) { }

  ngOnInit(): void {
    this.subscription1=this.dataservice.cart.subscribe(res=>{
      this.cart=res;
    });
    this.subscription2=this.dataservice.updateCart("opencart");
  }

  ngOnDestroy():void{
    this.subscription1.unsubscribe();
  }
}
