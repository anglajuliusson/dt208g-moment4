import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courselist: Course[] = []; // Orginaldata
  sortedCourseList: Course[] = []; // Sorterade listan
  search: string = '';
  sortCourseList: boolean = true; // Stigande, fallande

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.http.get<Course[]>('assets/ramschema.json').subscribe({
      next: (data) => {
        this.courselist = data;
        this.sortedCourseList = [...data]; // Kopiera initialt
      },
      error: () => {
        console.error('Fel vid hämtning av data');
      }
    });
  }

  // Filtrerar data direkt när användaren skriver
  filterData() {
    const phrase = this.search.toLowerCase();
    this.sortedCourseList = this.courselist.filter(course =>
      course.code.toLowerCase().includes(phrase) ||
      course.coursename.toLowerCase().includes(phrase)
    );
  }

  // Sortera efter valfritt fält
  sortBy(field: keyof Course) {
    this.sortCourseList = !this.sortCourseList;
    this.sortedCourseList.sort((a, b) => {
      const valueA = a[field].toLowerCase();
      const valueB = b[field].toLowerCase();
      return this.sortCourseList ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });
  }
}
