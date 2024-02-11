import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetaliiServiceService {

  readonly sharkApiUrl = "https://localhost:7021/api"; //de modificat
  constructor(private http:HttpClient) { }


  fct(id:number):Observable<any>{
    return this.http.get<any>(this.sharkApiUrl + '/Details/' + id);
    console.log(id);
    //return this.http.get<any>(this.sharkApiUrl + '/Details/' );
  }

}
