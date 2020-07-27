import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from "./courses.components";
import { CourseComponent } from './course/course.component';
import {CoursesService} from "./courses.service";
import {EmailService} from "./email.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FavoriteComponent } from './favorite/favorite.component';
import { CardComponent } from './card/card.component';
import { InputFormatDirective } from './input-format.directive';
import { FormComponent } from './form/form.component';
import { SignumFormComponent } from './signum-form/signum-form.component';
import { PostComponent } from './post/post.component';
import {PostService} from "./services/post.service";
import { FollowerComponent } from './follower/follower.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ProfilefollowerComponent } from './profilefollower/profilefollower.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    CardComponent,
    InputFormatDirective,
    FormComponent,
    SignumFormComponent,
    PostComponent,
    FollowerComponent,
    PagenotfoundComponent,
    HomecomponentComponent,
    ProfilefollowerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [CoursesService,EmailService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
