import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,
              public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
  }

  onRegister(form:any){
    this.authService.signUp({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(() => {
      this.dialogRef.close();
    })
  }

}
