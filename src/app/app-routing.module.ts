import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './layout/error/error.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'users', loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then((m) => m.PostsModule)},
  {path: 'todos', loadChildren: () => import('./modules/todo/todo.module').then((m) => m.TodoModule)},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
