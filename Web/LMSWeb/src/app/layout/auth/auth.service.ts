import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:7228/api/';

  constructor(
    public http:HttpClient

  ) { }

//for login
  getUser(json:any):Observable<any>{
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl+'Common/UserLogin',{params});
  }

  //to create a new user
  setUser(json:any):Observable<any>{
    return this.http.post(this.apiUrl + 'User/CreateUsers', {
      json:JSON.stringify(json)
    });
  }

}
