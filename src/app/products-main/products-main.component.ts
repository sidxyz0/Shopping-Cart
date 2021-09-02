import { Component, OnInit } from '@angular/core';
import { DataPassingService } from '../data-passing.service';
import { ActivatedRoute } from '@angular/router';
import { categoryData } from '../userDataModel/categoryData';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.css']
})
export class ProductsMainComponent implements OnInit {
  categoryList:any;
  subscription: any;
  cartObj:any;
  constructor(private dataservice:DataPassingService,readonly activedRoute: ActivatedRoute,public categoryData:categoryData) { }

  ngOnInit(): void {
    this.cartObj={
      amount:0,
      itemName:'',
      itemPrice:0,
      src:''
    }
    this.categoryList=this.categoryData.categoryData[0];
    this.subscription=this.dataservice.category.subscribe((res: any)=>{
      this.categoryData.categoryData.forEach(index => {
        if(index.categoryname==res){
          this.categoryList=index;
        }
      });
    })
  }

  addToCart(event:any){

    this.cartObj.amount=0;
    this.cartObj.itemName='';
    this.cartObj.itemPrice=0;
    this.cartObj.src='';

    this.cartObj.amount=0;
    this.cartObj.itemPrice=event.itemPrice;
    this.cartObj.itemName=event.itemName;
    this.cartObj.src=event.src;
    this.dataservice.updateCart(this.cartObj={
      amount:0,
      itemName:event.itemName,
      itemPrice:event.itemPrice,
      src:event.src
    });
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
