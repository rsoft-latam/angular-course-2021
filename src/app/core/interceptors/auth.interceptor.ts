import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {catchError} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.authService.getToken();

    if(token){
      let params = new HttpParams();
      params = params.append('auth', token);

      request = request.clone({
        url: `${request.url}`,
        params
      });
    }

    return next.handle(request).pipe(
      catchError( (err:any) => {
        console.log('ERROR', err)
        return throwError('ERROR EXTRA')
      })
    );
  }

}
