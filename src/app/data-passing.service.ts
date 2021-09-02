import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartData } from './userDataModel/cartData'

@Injectable({
  providedIn: 'root'
})
export class DataPassingService {
  name = new Subject<any>();
  category = new Subject<any>();
  token = new Subject<any>();
  cart = new BehaviorSubject<any[]>([]);
  temp: any;
  constructor(private http: HttpClient, cartData: CartData) {
  }

  ngOnInit() {
  }

  updateData(data: any) {
    this.name.next(data);
  }

  updateCategory(data: any) {
    this.category.next(data);
  }

  updateAuth(data: any) {
    this.token.next(data);
  }

  updateCart(data: any) {
    //objects are passed by refrence which means each inde will be pointing to same address and the contents will be updated with new values
    //on the same address.
    // ...data is es6 arrayspread operator which breaks the contents on an iterable and provides them as seperate arguments.
    // {...data} creates a new instance with arguments from arrayspread operator return output. 
    if (data != "opencart") {
      var found = false;
      for (var i = 0; i < this.cart.getValue().length; i++) {
        if (this.cart.getValue()[i].itemName == data.itemName) {
          found = true;
          this.cart.getValue()[i].amount++;
          this.cart.getValue()[i].itemPrice = this.cart.getValue()[i].amount * this.cart.getValue()[i].itemPrice;
        }
      }
      if (!found) {
        data.amount = data.amount + 1;
        this.cart.getValue().push({ ...data });
      }
      else {
        this.cart.next;
      }
    }
  }

  apiget(): Observable<any> {
    return this.http.get("https://api.publicapis.org/entries");
  }
}
