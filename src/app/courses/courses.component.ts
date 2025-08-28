import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, NgFor],
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
