import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TimelineComponent } from './componentes/timeline/timeline.component';
import { RegisterComponent } from './componentes/register/register.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment} from '../environments/environment';
import { AuthService } from './services/auth.service';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TimelineComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
