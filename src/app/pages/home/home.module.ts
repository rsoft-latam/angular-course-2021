import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {PublicationService} from "../shared/services/publication.service";
import {LayoutModule} from "../../core/layout/layout.module";
import {SharedMaterialModule} from "../../shared/shared-material.module";

const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    SharedMaterialModule
  ],
  providers: [
    PublicationService
  ]
})

export class HomeModule {
}
