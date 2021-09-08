import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TransactionService {

  private url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.http.get(`${this.url}/transactions.json`)
  }

  public create(body: any): Observable<any> {
    return this.http.post(`${this.url}/transactions.json`, body)
  }

  public update(id: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/transactions/${id}.json`, body);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/transactions/${id}.json`)
  }

}
