import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lacturer } from '../models/lacturer.model';

@Injectable({
  providedIn: 'root'
})
export class LacturerService {

  constructor(private _http:HttpClient) { }
  getLacturers():Observable<Lacturer[]>
  {
    return this._http.get<Lacturer[]>("/api/Lacturer");
  }
  getLacturerById(id:number):Observable<Lacturer>
  {
    return this._http.get<Lacturer>(`/api/Lacturer/${id}`);
  }
  addLacturer(c:Lacturer)
  {
    this._http.post("/api/post",c);
  }
  editLacturer(id:number,c:Lacturer)
  {
    this._http.put(`/api/Lacturer/${id}`,c);
  }
}
