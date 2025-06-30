import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {
  private baseUrl = 'http://localhost:3000';
  public user:any;
  constructor(private http:HttpClient) { }
  public createAccount(userObj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/users`,userObj)
  }
  public login(userObj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/users/login`,userObj);
  }
}
