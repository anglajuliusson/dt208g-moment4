import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

   // Properties
   private url: string = "public/ramschema.json";

  constructor() { }
}
