import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "./components/register/register.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private matDialog: MatDialog,
              private router: Router) {
  }

  ngOnInit(): void {
    if(this.authService.verifyLogged()){
      this.router.navigate(['pages']);
    }
  }

  login(form:any){
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(res => {
      console.log('RESPONSE', res);
      this.router.navigate(['pages']);
    });
  }

  onCreateNewAccount(){
    this.matDialog.open(RegisterComponent)
  }

}
