import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { CommonModule, NgClass } from '@angular/common';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LacturerService } from '../services/lacturer.service';
import { Lacturer } from '../models/lacturer.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  users: User[] = [];
  lacturers: Lacturer[] = [];
  isLacturer!: boolean
  user?: User;
  loginForm: FormGroup = new FormGroup({});
  constructor(private _userService: UserService, private _router: Router, private _lService: LacturerService) { }
  ngOnInit(): void {

    this._userService.getUsers().subscribe({
      next: (res) => {
        this.users = res;
      }, error: err => console.log(err)
    })
    this._lService.getLacturers().subscribe({
      next:(res)=>this.lacturers=res
    })
    this.loginForm
      = new FormGroup({
        "name": new FormControl("", [Validators.required]),
        "password": new FormControl("", [Validators.required]),
      });
  }

  togglePasswordVisibility(fieldId: string): void {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    if (field.type === 'password') {
      field.type = 'text';
    } else {
      field.type = 'password';
    }
  }
  onSubmit() {
    let tempUser: User = this.loginForm.value;
    if (this.users.filter(x => x.name == tempUser.name).length > 0) {
      if (this.users.filter(x => x.name == tempUser.name && x.password == tempUser.password).length > 0) {
        this.user = this.users.filter(x => x.name == tempUser.name)[0];
        sessionStorage.setItem("userId", JSON.stringify(this.user.id))
        sessionStorage.setItem("user", JSON.stringify(this.user))
        Swal.fire({
          position: "center",
          icon: "success",
          title: "נכנסת בהצלחה!!",
          showConfirmButton: false,
          timer: 1500
        }
        );
        this.isLacturer=false;
        sessionStorage.setItem('isL', JSON.stringify(this.isLacturer))
        this._router.navigate(['/allcourses'])
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "סיסמא שגויה!!",
          showConfirmButton: false,
          timer: 3000
        }
        );
      }
    }

    else {
      if (this.lacturers.filter(x => x.name == tempUser.name).length > 0) {
        if (this.lacturers.filter(x => x.name == tempUser.name && x.password == tempUser.password).length > 0) {
          this.user = this.lacturers.filter(x => x.name == tempUser.name)[0];
          sessionStorage.setItem("userId", JSON.stringify(this.user.id))
          sessionStorage.setItem("user", JSON.stringify(this.user))
          Swal.fire({
            position: "center",
            icon: "success",
            title: "נכנסת בהצלחה!!",
            showConfirmButton: false,
            timer: 1500
          }
          );
          // window.location.reload();
          this.isLacturer=true;
          sessionStorage.setItem('isL', JSON.stringify(this.isLacturer))
          this._router.navigate(['/allcourses'])
        }
        else{
          Swal.fire({
            position: "center",
            icon: "error",
            title: "סיסמא שגויה!!",
            showConfirmButton: false,
            timer: 3000
          }
          );
        }
      }
      else {
        let temp = tempUser.name;

        Swal.fire({
          title: "שם משתמש שגוי",
          icon: "error",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "להרשמה",
          cancelButtonText: "ביטול"
        }).then((result) => {
          if (result.isConfirmed)
            this._router.navigate(["/register", { "name": this.loginForm.controls['name'].value }]);
        });
      }
    }
  }
 
}