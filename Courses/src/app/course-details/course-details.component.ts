import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../services/course.service';
import { Course } from '../models/course.model';
import { NgClass, NgFor } from '@angular/common';
import { LacturerService } from '../services/lacturer.service';
import { Lacturer } from '../models/lacturer.model';
import { DateFormatPipe } from "../date.pipe";
import { User } from '../models/user.model';
import { IconPipePipe } from '../icon.pipe';
import { differenceInDays } from 'date-fns';

@Component({
  selector: 'app-course-details',
  standalone: true,
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
  imports: [NgFor, DateFormatPipe, NgClass, IconPipePipe]
})
export class CourseDetailsComponent {
  course!: Course;
  courseId!: number;
  lecture?: Lacturer;
  isLacturer!: boolean;
  isSoon:boolean =false;
  user!: User
  constructor(private route: ActivatedRoute, private router: Router, private _lservice: LacturerService, private _customerService: CoursesService) { }
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.courseId = param['id'];
    })
    this.user = JSON.parse(sessionStorage.getItem('user')!)
    this.isLacturer = JSON.parse(sessionStorage.getItem('isL')!)
    this._customerService.getCourses().subscribe({
      next: (res) => {
       
        this.course = res.filter(x => x.id == this.courseId)[0];
        let newdate=new Date(parseInt(this.course.dateStart.toString().split('-')[0]), parseInt(this.course.dateStart.toString().split('-')[1])-1, parseInt(this.course.dateStart.toString().split('-')[2]));    
       this.isSoon=(differenceInDays(newdate, new Date()))<=7&&differenceInDays(newdate, new Date())>=0;           
      }
    }
    )
    this._lservice.getLacturers().subscribe({
      next: (res) => {
        this.lecture = res.filter(x => x.id == this.course?.lacturerId)[0]

      }
    })

  }

  goBack() {
    this.router.navigate(['/allcourses'])
  }
  goEdit() {
    this.router.navigate(['/addedit', { 'course': this.course.id }])
  }
}
