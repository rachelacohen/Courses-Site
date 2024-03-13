import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/course.service';
import { Course } from '../models/course.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { User } from '../models/user.model';
import { usConnectGuard } from '../us-connect.guard';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './allcourses.component.html',
  styleUrl: './allcourses.component.scss'
})
export class AllCoursesComponent implements OnInit {
  constructor(private _courses: CoursesService, private router: Router, private _categories: CategoryService, private route: ActivatedRoute) { }
  courses: Course[] = [];
  categories: Category[] = [];
  selectedCategoryId = -1;
  selectedType = -1;
  selectedName = "";
  isUser!: boolean;
  user!: User;
  nameCourse: string[]=[];
  isLacturer:boolean=false;

  ngOnInit(): void {
    this.isUser = sessionStorage.getItem('user') == JSON.stringify(new User());
    this.user = JSON.parse(sessionStorage.getItem('user')!)
    this.isLacturer = JSON.parse(sessionStorage.getItem('isL')!)
    console.log(this.isLacturer, "isl", this.user, "user")
    this._courses.getCourses().subscribe({
      next: (res) => {
        this.courses = res;
        console.log(this.courses);
        
      }
    })
    this._categories.getCategorys().subscribe({
      next: (res) => {
        this.categories = res;
        if (this.categories.filter(c => c.id == -1).length == 0)
          this.categories.unshift({ id: -1, name: "כל הקטגוריות", icon: "bi bi-collection" })

      }
    })
  }
  showCourseDetails(id: number) {
    console.log(this.isUser)
    this.router.navigate(["/courseDetails", { "id": id }])
  }
  filterCategory(event: any) {
    this.selectedCategoryId = parseInt(event.target.value);
  }
  filterType(event: any) {
    this.selectedType = parseInt(event.target.value);
  }
  filterName(event: any) {
    this.selectedName = event.target.value;
  }

  
}
