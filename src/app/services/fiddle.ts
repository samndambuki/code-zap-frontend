import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { FiddleResponse } from '../models/fiddle';

@Injectable({
  providedIn: 'root'
})
export class Fiddle {
  private http = inject(HttpClient);
  private userService = inject(User);
  private baseUrl = 'http://localhost:3000'
  newFiddle():Observable<FiddleResponse>{
    return this.http.post<FiddleResponse>(`${this.baseUrl}/fiddles`,`${this.userService.user.userid}`) 
  }
  //get all fiddles for current user
  getFiddles():Observable<FiddleResponse>{
    return this.http.get<FiddleResponse>(`${this.baseUrl}/fiddles/user/${this.userService.user.userid}`)
  }
  //get data for a specific fiddle
  getFiddleData(fiddleid:string):Observable<FiddleResponse>{
    return this.http.get<FiddleResponse>(`${this.baseUrl}/fiddles/${fiddleid}`)
  }
  //saves a fiddle
  //Partial<T> is a utility type that makes all properties of tpye T optional
  //allows you to pass an object with any subset of {title:"my code"},{title:"my code",code:"console.log('hello"}
  save(fiddleObj:Partial<FiddleResponse>):Observable<FiddleResponse>{
    return this.http.put<FiddleResponse>(`${this.baseUrl}/fiddles`,fiddleObj)
  }
  //delete a fiddle
  delete(fiddleid:string):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}fiddles/${fiddleid}`)
  }

}
        