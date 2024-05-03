import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  apiUrl = 'https://localhost:7228/api/';

  constructor(
    public http:HttpClient
  ) { }

  getNavigation(json:any):Observable<any>{
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl+'Common/GetNavigation',{params})
  }
  getUserType(json:any):Observable<any>{
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl+'User/GetUserType',{params})
  }

  getDashboard(json:any):Observable<any>{
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl+'Common/GetDashboard',{params})
  }

}
