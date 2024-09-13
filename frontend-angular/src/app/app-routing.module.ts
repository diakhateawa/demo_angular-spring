import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {StudentsComponent} from "./students/students.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PaiementsComponent} from "./paiements/paiements.component";
import {LoadStudentsComponent} from "./load-students/load-students.component";
import {LoadPaiementsComponent} from "./load-paiements/load-paiements.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";

const routes: Routes = [
  {path : "", component : LoginComponent},

  {path : "login", component : LoginComponent},
  {path : "admin", component : AdminTemplateComponent, canActivate : [AuthGuard],
    children : [
      {path : "home", component : HomeComponent},
      {path : "profile", component : ProfileComponent},

      {path : "dashboard", component : DashboardComponent},
      {path : "students", component : StudentsComponent},
      {path : "paiements", component : PaiementsComponent},

      {path : "loadStudents", component : LoadStudentsComponent,
        canActivate : [AuthorizationGuard], data :{roles: ['ADMIN']}},
      {path : "loadPaiements", component : LoadPaiementsComponent,
        canActivate : [AuthorizationGuard], data :{roles: ['ADMIN']}},

      ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
