import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  apiUrl = 'https://localhost:7228/api/';
  constructor(
    public http:HttpClient
  ) { }

  // dynamic
  getBorrowData(json: any): Observable<any> {
    return this.http.get(this.apiUrl + 'Borrow/GetAllBorrows', { params: { json: json } });
  }
//setBorrow
setBorrow(json:any):Observable<any>{
  return this.http.post(this.apiUrl + 'Borrow/BorrowTsk', {
    json:JSON.stringify(json)
  });
}

//get user
getBookGenre(json:any):Observable<any>{
  const params = new HttpParams().set('json', JSON.stringify(json));
  return this.http.get(this.apiUrl+'Book/GetBookGenre',{params});
}

//getAllBooks
getBook(json:any):Observable<any>{
  const params = new HttpParams().set('json', JSON.stringify(json));
  return this.http.get(this.apiUrl+'Book/GetAvailableBooks',{params});
}


//getUserMembership
getUserMembership(json:any):Observable<any>{
  const params = new HttpParams().set('json', JSON.stringify(json));
  return this.http.get(this.apiUrl+'Membership/GetUserMembership',{params});
}

}
