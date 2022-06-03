import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'user', component: UserComponent},
      {path: 'user-details/:id', component: UserDetailsComponent},
      {path: '', redirectTo: '/users/user', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }