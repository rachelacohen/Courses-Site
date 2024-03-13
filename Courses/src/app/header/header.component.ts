import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User } from '../models/user.model';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isLacturer!:boolean;
constructor(private router:Router){}
  ngOnInit(): void {
    this.isLacturer=JSON.parse(sessionStorage.getItem('isL')!)
  }
toHome(){
  this.router.navigate(['/home'])
}

toAllCourses(){
  this.router.navigate(['/allcourses'])
}
toCourseDetails(){
this.router.navigate(['/coursedetails'])
}

tologin(){
  this.router.navigate(['/login'])
}

toRegister(){
  this.router.navigate(['/register'])
}

toAAddEdit(){
  this.router.navigate(['/addedit']);
}
isConnect(){
let temp=sessionStorage.getItem('user');
return (temp!=JSON.stringify(new User()))
}

getCurrentRoute(): string {
  return this.router.url.split('/')[1];
}

logout(){
  sessionStorage.setItem('user',JSON.stringify(new User()))
  sessionStorage.setItem('userId', JSON.stringify(new User()))
window.location.reload();
}



}


