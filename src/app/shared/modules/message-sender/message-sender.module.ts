import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MessageSenderComponent} from "./message-sender.component";
import {SharedMaterialModule} from "../../shared-material.module";

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [
    MessageSenderComponent
  ],
  exports: [
    MessageSenderComponent
  ]
})

export class MessageSenderModule {
}
