import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TimelineComponent } from './componentes/timeline/timeline.component';
import { RegisterComponent } from './componentes/register/register.component';
import { EditComponent } from './componentes/edit/edit.component';
import { NewpostComponent } from './componentes/newpost/newpost.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { DetailsComponent } from './app/details/details.component';
//import { ErrpageComponent } from './errpage/errpage.component';
//import { AuthGuard } from './guards/auth.guard';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TimelineComponent,
    RegisterComponent,
    EditComponent,
    NewpostComponent,
    DetailsComponent,
    //ErrpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FlashMessagesModule
  ],
  providers: [AuthService, FlashMessagesService, PostService],//AuthGuard
  bootstrap: [AppComponent]
})
export class AppModule { }
