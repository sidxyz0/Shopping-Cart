import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataPassingService } from '../data-passing.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: any;
  subscription: any;
  logStatus: any;
  constructor(readonly location: Location, readonly router: Router, private dataservice: DataPassingService, readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.logStatus = "LOGOUT";
    }
    else {
      this.logStatus = "LOGIN";
    }
    this.subscription = this.dataservice.token.subscribe((res: any) => {
      if (res == "tokenset") {
        this.logStatus = "LOGOUT";
      }
      else {
        this.logStatus = "LOGIN";
      }
    });
  }

  logFunction() {
    if (this.logStatus == "LOGIN") {
      this.router.navigate(['/login']);
    }
    if (this.logStatus == "LOGOUT") {
      localStorage.removeItem("token");
      this.router.navigate(['/login']);
    }
  }

  goToProductsPage() {
    this.userName = this.location.path().substring(this.location.path().indexOf('=')+1);
    this.router.navigate(['/productsMain'], { queryParams: { userName: this.userName } })
  }

  goToCart() {
    
    this.userName = this.location.path().substring(this.location.path().indexOf('=')+1);
    this.router.navigate(['/cart'],{ queryParams: { userName: this.userName } });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
