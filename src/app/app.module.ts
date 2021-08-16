import { componentFactoryName } from '@angular/compiler/src/compile_metadata';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Directive1Directive } from './directive1.directive';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Directive1Directive
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
