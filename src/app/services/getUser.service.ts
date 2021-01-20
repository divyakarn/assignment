import { userDetails } from './../user.model';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"


@Injectable({
  providedIn: "root"
})
export class GetUsers {

  constructor(
    private http: HttpClient
  ) {
  }
  // this is code for api calls
  // and we have passed the text we want to search in the function

  GetUsersFromApi(txt?): Observable<userDetails[]> {
    console.log('service reached');
    const params = new HttpParams;
    const url = `https://jsonplaceholder.typicode.com/users`;
    console.log(url);

    return this.http.get<userDetails[]>(url, { params }).pipe(map(result => txt ? result.filter(one => one.name.toLowerCase().includes(txt.toLowerCase())) : result));
  }


}
