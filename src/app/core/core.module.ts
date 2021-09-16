import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ]
})

export class CoreModule {
}
