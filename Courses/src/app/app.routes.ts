import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { HomeComponent } from "./home/home.component";

import { AdddeditComponent } from "./adddedit/adddedit.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { AllCoursesComponent } from "./allcourses/allcourses.component";
import { usConnectGuard } from "./us-connect.guard";
import { isLacturerGuard } from "./is-lacturer.guard";
export const routes: Routes = [
    {path:"", redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent },
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"allcourses",component:AllCoursesComponent},
    {path:"courseDetails",component:CourseDetailsComponent, canActivate:[usConnectGuard]},
    {path:"addedit",component:AdddeditComponent},
    {path:"**",component:NotfoundComponent}
];