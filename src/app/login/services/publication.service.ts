import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class PublicationService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get(
      `${this.url}/publications.json`);
  }

  public create(body: any): Observable<any>{
    return this.http.post(
      `${this.url}/publications.json`,
      body);
  }

  public update(id: string, body: any): Observable<any>{
    return this.http.put(
      `${this.url}/publications/${id}.json`,
      body);
  }

  public patch(id: string, body: any): Observable<any>{
    return this.http.patch(
      `${this.url}/publications/${id}.json`,
      body);
  }

  public delete(id: string): Observable<any>{
    return this.http.delete(
      `${this.url}/publications/${id}.json`);
  }

}
