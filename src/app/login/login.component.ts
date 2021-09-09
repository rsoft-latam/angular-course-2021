import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name:string = '';

  formReactive: FormGroup;

  constructor(private formBuilder:FormBuilder) {

    this.formReactive = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  getValue(value:string){
    return this.formReactive.get(value);
  }


}
