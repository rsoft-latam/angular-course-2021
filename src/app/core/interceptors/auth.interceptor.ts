import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from "../../login/services/auth.service";
import {catchError} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.authService.getToken();

    if(token){
      //let params = new HttpParams();
      //params.append('auth', 'asdasdasdas')
      //params.append('dgdfg', 'asdasdasdas')
      //params.append('aughkhjkhjkth', 'asdasdasdas')

      //console.log('PARAMS', params)

      request = request.clone({
        url: `${request.url}?auth=${token}`
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
