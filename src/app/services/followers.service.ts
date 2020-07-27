import { Injectable } from '@angular/core';
import {DataService} from "./data-service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService{

  constructor(http:HttpClient) {
    super("https://api.github.com/users/IDBRAHIMDEV/followers",http);
  }
}
