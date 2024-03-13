import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { log } from 'console';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _http:HttpClient) { }
  getCourses():Observable<Course[]>
  {
    return this._http.get<Course[]>("/api/Course");
  }
  getCourseById(id:number):Observable<Course>
  {
  let temp:Observable<Course> =this._http.get<Course>(`/api/Course/${id}`)
    return (temp);
  }
  addCourse(c:Course)
  {
   return this._http.post("/api/Course",c);
  }
  editCourse(c:Course)
  {
    console.log(c, "c service")
    
    let x= this._http.post(`/api/Course`, c)
  
    return x;
  }
}
