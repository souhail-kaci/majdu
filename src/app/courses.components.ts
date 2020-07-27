import {Component} from "@angular/core";
import {CoursesService} from "./courses.service";

@Component({
  selector :'courses',
  template: `
    <h1 [style.color]=" isActive ? 'red' : 'blue'">{{title}}</h1>

    <div class="container">

      <ul class="list-group">
        <li class="list-group-item">{{course.titre }}</li>
        <li class="list-group-item">{{course.avis}}</li>
        <li class="list-group-item">{{course.participant}}</li>
        <li class="list-group-item">{{course.prix | currency:'EUR':'code'}}</li>
        <li class="list-group-item">{{course.publication | date:'fullDate'}}</li>
      </ul>

    </div>

  `
})

export class CoursesComponent {

   isActive:boolean = true;
  title:string = "Mes courses";
  course = {
    titre : 'Formation sur Angular',
    avis : '4,988',
    participant : 138,
    prix : 50,
    publication : new Date(2017,8,12)

  };



  onClick($event){
    if(this.isActive==true)
    this.isActive = false;
    else
      this.isActive = true;
  }


  onKeyUp(){
    console.log();
  }

}
