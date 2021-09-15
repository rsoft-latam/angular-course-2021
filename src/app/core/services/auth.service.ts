import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  url = environment.auth.apiBaseUrl;
  key = environment.auth.key;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public login(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(
      map((res: any) => {
        this.authSuccess(res.idToken, res.localId)
        return res;
      })
    );
  }

  public signUp(body: any) {
    return this.http.post(`${this.url}/v1/accounts:signUp?key=${this.key}`, body);
  }

  private authSuccess(token: string, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  public verifyLogged(): boolean {
    const token = localStorage.getItem('token');
    // token ? true : false
    return !!token;
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['login'])
  }

}
