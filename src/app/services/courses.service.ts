import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // Properties
  private url: string = "assets/ramschema.json";

  constructor(private http: HttpClient) { }


  // Methods
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}
