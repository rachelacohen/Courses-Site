import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  getUsers():Observable<User[]>
  {
    return this._http.get<User[]>("/api/User");
  }
  getUserById(id:number):Observable<User>
  {
    return this._http.get<User>(`/api/User/${id}`);
  }
  addUser(c:User)
  {
   return this._http.post("/api/User",c)   
  }
  editUser(id:number,c:User)
  {
   return this._http.put(`/api/User/${id}`,c);
  }
}
