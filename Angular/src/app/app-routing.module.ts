import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DepartmentListComponent } from './Routing/department-list/department-list.component';
import { EmployeeListComponent } from './Routing/employee-list/employee-list.component';
import { AdminGuardGuard } from './admin-guard.guard';

const routes: Routes = [
  { path:'login',component: LoginComponent},
  { path:'departments',component: DepartmentListComponent },
  { path:'employees',component:EmployeeListComponent},
  { path:"admin", canActivateChild:[AdminGuardGuard] , children: [
    {
       path: 'departments',
       component: DepartmentListComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
