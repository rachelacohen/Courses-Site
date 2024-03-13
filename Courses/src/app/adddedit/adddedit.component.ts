import { CommonModule, NgFor } from '@angular/common';
import { Component, NgIterable, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course, TypeLearning } from '../models/course.model';
import { CoursesService } from '../services/course.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-adddedit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './adddedit.component.html',
  styleUrl: './adddedit.component.scss'
})
export class AdddeditComponent implements OnInit {
  course: Course=new Course();
  courseId?: number
  courseForm!: FormGroup
  constructor(private route: ActivatedRoute, private _courseService: CoursesService, private _categoriesService: CategoryService, private router:Router) { }
  typeLearning = TypeLearning;
  get syllabusControls(): FormArray {
    return this.courseForm.controls['syllabus'] as FormArray;
  }



  addSyllabusItem() {
    this.syllabusControls.push(new FormControl('', Validators.required));
  }
  cancel() {
    this.course = new Course();
    this.router.navigate(['/allcourses'])
  }
  categories!: Category[];
  ngOnInit(): void {
    this.getCourse();
    this.getCategories();
    this.initForm();
  }
  
  getCourse() {
    this.route.params.subscribe((param) => {
      this.courseId = param['course'];
      this._courseService.getCourses().subscribe({
        next: (res) => {
          this.course = res.filter(x => x.id == this.courseId)[0];
        }
      })
    })
  }
  getCategories() {
    this._categoriesService.getCategorys().subscribe({
      next: res => { this.categories = res }
    })
  }
  initForm() {
    this.courseForm = new FormGroup({
      'name': new FormControl(this.course?.name, [Validators.required]),
      'categoryId': new FormControl(this.course?.categoryId, [Validators.required]),
      'countLessons': new FormControl(this.course?.countLessons, [Validators.required]),
    
      'dateStart': new FormControl(new Date(parseInt(this.course?.dateStart.toString().split('-')[2]),parseInt(this.course?.dateStart.toString().split('-')[1]),parseInt(this.course?.dateStart.toString().split('-')[0])) , [Validators.required]),
      'syllabus': new FormArray([new FormControl('', [Validators.required])]),
      'type': new FormControl(this.course?.type, [Validators.required]),
      'image': new FormControl(this.course?.image, [Validators.required])
    })
    this.updateFormValues();
    console.log(this.course?.dateStart,"lkjyut")
    // window.location.reload();
  }
  updateFormValues() {
    const silibusFormArray = this.courseForm.get('syllabus') as FormArray;
    silibusFormArray.removeAt(0);
    this.course?.syllabus?.forEach((silibusItem) => {
      silibusFormArray.push(new FormControl(silibusItem, [Validators.required]));
    });
   
  }
  removeSyllabusItem(i: number) {
    const silibusFormArray = this.courseForm.get('syllabus') as FormArray;
    silibusFormArray.removeAt(i);
  }
  getChanges():boolean {
    let flag:boolean=true
    if(this.course==undefined)
    this.course=new Course();
    {this.course.name = this.courseForm.controls['name'].value;
    this.course.categoryId = parseInt(this.courseForm.controls['categoryId'].value);
    this.course.countLessons = this.courseForm.controls['countLessons'].value;
    this.course.dateStart = this.courseForm.controls['dateStart'].value;
    this.course.syllabus = this.courseForm.controls['syllabus'].value;
    this.course.type = this.courseForm.controls['type'].value == "פרונטלי" ? 0 : 1;
    if (this.course.lacturerId==undefined)
     { 
      flag=false;
      this.course.lacturerId = JSON.parse(sessionStorage.getItem("userId")!)
    }
    this.course.image = this.courseForm.controls['image'].value;}
    return flag;
  }
  onSubmit() {
    let flag:boolean=true;
    this.getCourse();
    console.log(this.course?.name+"lkjbv")
    flag=this.getChanges();
    if(this.course)
    {
    if (flag)
     { this._courseService.editCourse(this.course).subscribe({
        next: (res) => { 
              
          Swal.fire({
            position: "center",
            icon: "success",
            title: "עודכן בהצלחה!!",
            showConfirmButton: false,
            timer: 1500
          }
          );
          
        }
      });}
    else {    
      this._courseService.addCourse(this.course!).subscribe({
        next: res => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "נוסף בהצלחה!!",
            showConfirmButton: false,
            timer: 1500
          }
          );
        }
      })
    }
  }}
}

