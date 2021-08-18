import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buy1Component } from './buy1/buy1.component';
import { Buy2Component } from './buy2/buy2.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Buy1Component,
    Buy2Component
  ]
})
export class BuyModule { }