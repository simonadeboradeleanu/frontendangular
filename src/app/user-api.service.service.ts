import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserApiServiceService {
  readonly userApiUrl = "https://localhost:7021/api"; //de modificat
  constructor(private http:HttpClient) { }

  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.userApiUrl + '/Users');
  }
}
