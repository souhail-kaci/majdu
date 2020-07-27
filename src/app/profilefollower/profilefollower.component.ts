import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profilefollower',
  templateUrl: './profilefollower.component.html',
  styleUrls: ['./profilefollower.component.css']
})
export class ProfilefollowerComponent implements OnInit {

  id :number;
  constructor(private param:ActivatedRoute) { }

  ngOnInit(): void {
   this.id =  +this.param.snapshot.paramMap.get('user')

    this.param.queryParamMap
      .subscribe(query => {console.log(query.get('type'))});

  }

}
