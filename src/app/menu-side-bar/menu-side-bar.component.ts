import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataPassingService } from '../data-passing.service';
import { categoryData } from '../userDataModel/categoryData';

@Component({
  selector: 'app-menu-side-bar',
  templateUrl: './menu-side-bar.component.html',
  styleUrls: ['./menu-side-bar.component.css']
})
export class MenuSideBarComponent implements OnInit {
  parameters:any;
  username:any;
  categoryList: any;
  selectedcategory:any;
  subscription: any;
  constructor(private dataservice: DataPassingService, readonly activedRoute: ActivatedRoute, public categoryData:categoryData) { }

  ngOnInit(): void {
    this.subscription=this.dataservice.name.subscribe((res: any)=>{
      this.username=res;
    });
    this.activedRoute.queryParams.subscribe(params=>{
      this.dataservice.updateData(params.userName);
    });
    this.categoryList= this.categoryData.categoryData;
  }

  selectedCategory(event:any){
    this.selectedcategory=event.target.innerHTML;
    this.dataservice.updateCategory(event.target.innerHTML);
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
