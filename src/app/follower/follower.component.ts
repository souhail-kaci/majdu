import { Component, OnInit } from '@angular/core';
import {FollowersService} from "../services/followers.service";

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {

  follower :any = [];

  constructor(private followerServivce:FollowersService) { }

  ngOnInit(): void {
    this.getFollower();
  }

  getFollower(){
    this.followerServivce.getAll()
      .subscribe(follower => {
        this.follower = follower;
      })

  }




}
