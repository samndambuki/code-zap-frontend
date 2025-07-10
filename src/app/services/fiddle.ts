import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './user';
import { map, Observable } from 'rxjs';
import { FiddleResponse } from '../models/fiddle';

@Injectable({
  providedIn: 'root'
})
export class Fiddle {
  private http = inject(HttpClient);
  private userService = inject(User);
  private baseUrl = 'http://localhost:3000';
  newFiddle():Observable<FiddleResponse>{
    return this.http.post<{error:boolean,response:FiddleResponse}>(`${this.baseUrl}/fiddles`,{userid:this.userService.user.userid}).pipe(map((res)=>res.response)) 
  }
  //get all fiddles for current user
  getFiddles():Observable<FiddleResponse[]>{
    return this.http.get<{error:boolean,response:FiddleResponse[]}>(`${this.baseUrl}/fiddles/user/${this.userService.user.userid}`)
    //pipe - allows you to chain multiple operators together to transform data
    //transforms omitted value from the observable
    //map - function that receives the current value and returns a new value
    .pipe(map((res)=>res.response))
  }
  //get data for a specific fiddle
  getFiddleData(fiddleid:string):Observable<FiddleResponse>{
    return this.http.get<{error:boolean,response:FiddleResponse}>(`${this.baseUrl}/fiddles/${fiddleid}`).pipe((map((res)=>res.response)))
  }
  //saves a fiddle
  //Partial<T> is a utility type that makes all properties of tpye T optional
  //allows you to pass an object with any subset of {title:"my code"},{title:"my code",code:"console.log('hello"}
  save(fiddleObj:Partial<FiddleResponse>):Observable<FiddleResponse>{
    return this.http.put<{error:boolean,response:FiddleResponse}>(`${this.baseUrl}/fiddles`,fiddleObj).pipe(map((res)=>res.response))
  }
  //delete a fiddle
  delete(fiddleid:string):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/fiddles/${fiddleid}`)
  }
  run(opts:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/execute`,opts)
  }
}
       