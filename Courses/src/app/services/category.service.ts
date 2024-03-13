import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  getCategorys():Observable<Category[]>
  {
    return this._http.get<Category[]>("/api/Category");
  }
  getCategoryById(id:number):Observable<Category>
  {
    return this._http.get<Category>(`/api/Category/${id}`);
  }
  addCategory(c:Category)
  {
    this._http.post("/api/post",c);
  }
  editCategory(id:number,c:Category)
  {
    this._http.put(`/api/Category/${id}`,c);
  }
}
