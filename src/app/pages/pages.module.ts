import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)},
  {path: 'profile', loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfileModule)},

];

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
