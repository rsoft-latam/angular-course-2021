import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {View3sub1Component} from "./view3sub1/view3sub1.component";
import {View3sub2Component} from "./view3sub2/view3sub2.component";
import {Router, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'view3sub1', pathMatch: 'full'},
  {path: 'view3sub1', component: View3sub1Component,
  children: [
    {
      path: 'view3sub2sub1', component: View3sub2Component
    }
  ]
  }
]

@NgModule({
  declarations: [
    View3sub1Component,
    View3sub2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class View3Module { }
