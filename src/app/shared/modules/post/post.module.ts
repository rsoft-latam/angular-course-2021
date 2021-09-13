import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PostComponent} from "./post.component";
import {SharedMaterialModule} from "../../shared-material.module";

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [
    PostComponent
  ],
  exports: [
    PostComponent
  ]
})

export class PostModule {
}
