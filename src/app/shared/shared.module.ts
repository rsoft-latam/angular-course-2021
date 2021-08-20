import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';
import { ExponentPipe } from './exponent.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    LoaderComponent,
    ExponentPipe,
    ExponentPipe
  ],
  exports: [
    CardComponent,
    LoaderComponent,
    ExponentPipe
  ]
})
export class SharedModule { }
