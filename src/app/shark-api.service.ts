import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharkApiService {

  readonly sharkApiUrl = "https://localhost:7021/api"; //de modificat
  constructor(private http:HttpClient) { }


  getSharkList():Observable<any[]>{
    return this.http.get<any[]>(this.sharkApiUrl + '/sharks');
  }

  getSharkById(id:number):Observable<any>{
    return this.http.get<any>(this.sharkApiUrl + '/sharks/' + id);
  }

  addShark(data:any){
    return this.http.post(this.sharkApiUrl + '/sharks', data);
  }

  updateShark(id:number|string, data:any){
    return this.http.put(this.sharkApiUrl + `/sharks/${id}`, data);
  }

  deleteShark(id:number|string){
    return this.http.delete(this.sharkApiUrl + `/sharks/${id}`);
  }

  getOceansList():Observable<any[]>{
    return this.http.get<any[]>(this.sharkApiUrl + '/oceans');
  }

  getOceansById(id:number):Observable<any>{
    return this.http.get<any>(this.sharkApiUrl + '/sharks/' + id);
  }

  getSharksByOceanId(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.sharkApiUrl + '/oceans/' + id + '/sharks');
  }

  addOceans(data:any){
    return this.http.post(this.sharkApiUrl + '/oceans', data);
  }

  updateOceans(id:number|string, data:any){
    return this.http.put(this.sharkApiUrl + `/oceans/${id}`, data);
  }

  deleteOceans(id:number|string){
    return this.http.delete(this.sharkApiUrl + `/oceans/${id}`);
  }
}
