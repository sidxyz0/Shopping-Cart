import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userData } from '../userDataModel/userdata'
import { DataPassingService } from '../data-passing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(readonly router: Router, private formbuilder: FormBuilder, private userdata: userData,private datapassing:DataPassingService) { }
  loginForm!: FormGroup;
  invalid!: boolean;

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  goToProductsMainPage() {
    this.userdata.userData.forEach(index => {
      if ((this.loginForm.value.username == index.username) && (this.loginForm.value.password == index.password)) {
        this.invalid=false;
        this.datapassing.updateData(this.loginForm.value.username);
        localStorage.setItem("token",this.loginForm.value.username);
        this.datapassing.updateAuth("tokenset");
        this.router.navigate(['/productsMain'], { queryParams: { userName: this.loginForm.value.username } });
        
      }
    });
  }
}
