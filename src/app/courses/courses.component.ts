import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courselist: Course[] = [];

  constructor(private courseservice : CoursesService) {}

  ngOnInit() {
    this.courseservice.getCourses().subscribe(data => {
      this.courselist = data;
    })
  }
}
