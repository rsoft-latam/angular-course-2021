import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WalletService {

  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<any> {
    return this.http.get(`${this.url}/wallets.json`)
  }

  public create(body: any): Observable<any> {
    return this.http.post(`${this.url}/wallets.json`, body)
  }

  public update(id: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/wallets/${id}.json`, body);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/wallets/${id}.json`)
  }

}
