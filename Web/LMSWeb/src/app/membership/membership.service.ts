import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  apiUrl = 'https://localhost:7228/api/';
  constructor(
    public http:HttpClient
  ) { }

// dynamic
getMembershipData(json: any): Observable<any> {
  return this.http.get(this.apiUrl + 'Membership/GetAllMembershipDynamic', { params: { json: json } });
}
//membership type
getMembershipType(json:any):Observable<any>{
  const params = new HttpParams().set('json', JSON.stringify(json));
  return this.http.get(this.apiUrl+'Membership/GetMembershipType',{params});
}

//setMembership
setMembership(json:any):Observable<any>{
  return this.http.post(this.apiUrl + 'Membership/MembershipTsk', {
    json:JSON.stringify(json)
  });
  }
}
