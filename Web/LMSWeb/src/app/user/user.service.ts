import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:7228/api/';
  usert: any;
  constructor(
    public http:HttpClient
  ) { }

  //dynamic user data
  getUserData(json: any): Observable<any> {
    return this.http.get(this.apiUrl + 'User/GetUserDynamic', { params: { json: json } });
  }

  //all user data
  getAllUser(json:any):Observable<any>{
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl+'User/GetAllUsers',{params});
  }
}
