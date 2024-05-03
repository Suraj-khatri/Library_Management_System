import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomershipService {

  apiUrl = 'https://localhost:7228/api/';
  constructor(
    public http:HttpClient
  ) { }

// dynamic
getCustomerMembershipData(json: any): Observable<any> {
  return this.http.get(this.apiUrl + 'CustomerMembership/GetAllDynamicCustomerMembership', { params: { json: json } });
}

//setCustomerMembership
setCustomerMembership(json:any):Observable<any>{
  return this.http.post(this.apiUrl + 'CustomerMembership/CustomerMembershipTsk', {
    json:JSON.stringify(json)
  });
  }

  //setCustomerUpgradeToMembership
setCustomerUpgradeToMembership(json:any):Observable<any>{
  return this.http.post(this.apiUrl + 'CustomerMembership/CustomerUpgradeToMembershipTsk', {
    json:JSON.stringify(json)
  });
  }


}
