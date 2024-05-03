import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'https://localhost:7228/api/';
  constructor(
    public http:HttpClient
  ) { }

  getBook(json:any):Observable<any>{
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl+'Book/GetDynamicAvailableBooks',{params});
  }
  getAvailableBook(json:any):Observable<any>{
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl+'Book/GetAvailableBooks',{params});
  }
// dynamic
  getBookData(json: any): Observable<any> {
    return this.http.get(this.apiUrl + 'Book/GetDynamicAvailableBooks', { params: { json: json } });
  }
//setBook
setBook(json:any):Observable<any>{
  return this.http.post(this.apiUrl + 'Book/BookTsk', {
    json:JSON.stringify(json)
  });
}
//get genre
getBookGenre(json:any):Observable<any>{
  const params = new HttpParams().set('json', JSON.stringify(json));
  return this.http.get(this.apiUrl+'Book/GetBookGenre',{params});
}

}
