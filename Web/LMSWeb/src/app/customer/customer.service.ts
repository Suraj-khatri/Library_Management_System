import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:7228/api/';
  constructor(
    public http:HttpClient
  ) { }

  //customerdetails
  getCustomerDetails(json:any):Observable<any>{
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl+'CustomerMembership/CustomerDetailSel',{params});
  }

}
