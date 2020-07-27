import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {UsernameValidator} from "./username.validator";

@Component({
  selector: 'signum-form',
  templateUrl: './signum-form.component.html',
  styleUrls: ['./signum-form.component.css']
})
export class SignumFormComponent implements OnInit {

  form = new FormGroup({
    username : new FormControl('',[Validators.required,UsernameValidator.pasDespace]),
    password : new FormControl('',[Validators.required,Validators.minLength(4)])

  })

  constructor() { }

  ngOnInit(): void {
  }

 get username(){
    return this.form.get('username');
 }

 get password(){
    return this.form.get('password');
 }

}
