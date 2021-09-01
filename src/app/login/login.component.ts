import { Component, OnInit } from '@angular/core';
import {Test1Service} from "./services/test1.service";
import {SingletonService} from "./services/singleton.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private test1Service: Test1Service,
              private singletonService: SingletonService) {
    console.log(this.test1Service.getItems())


  }

  ngOnInit(): void {
  }

  setMessage(){
    this.singletonService.setMessage('HI FROM LOGIN');
  }

}
