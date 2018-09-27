import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { TimelineComponent } from './componentes/timeline/timeline.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [//CommonModule,
     RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
