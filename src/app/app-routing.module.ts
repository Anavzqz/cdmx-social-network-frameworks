import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { TimelineComponent } from './componentes/timeline/timeline.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EditComponent } from './componentes/edit/edit.component';
import { NewpostComponent } from './componentes/newpost/newpost.component';

//import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'timeline', component: TimelineComponent},//canActivate: [AuthGuard]
  {path: 'navbar', component: NavbarComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'newpost/:id', component: NewpostComponent}
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
