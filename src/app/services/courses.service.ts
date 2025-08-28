import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

   // Properties
   private url: string = "public/ramschema.json";

  constructor(private http: HttpClient) { }
}
