import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgbButtonsModule, NgbModule, NgbToastModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {path: '', component: LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    NgbToastModule,
    NgbButtonsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
