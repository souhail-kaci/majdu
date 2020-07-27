
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import {Observable} from "rxjs";
import {AppError} from "../common/app-error";
import {NotFoundError} from "../common/not-found-error";
import {BadInput} from "../common/bad-input";



export class DataService {


  constructor(private url:string,private http:HttpClient) {
  }

  getAll(){
    return this.http.get(this.url).pipe(catchError(this.hadleError));
  }

  add(post){
    return this.http.post(this.url,post).pipe(catchError(this.hadleError));
  }
  edit(id:number,resource){
    return this.http.put(this.url+"/"+id,resource).pipe(catchError(this.hadleError));
  }
  delete(id:number){
    return this.http.delete(this.url+"/"+id).pipe(
      catchError(this.hadleError)
    );

  }

  private hadleError(error:Response) {
    if (error.status === 404)
      return Observable.throw(new NotFoundError);
    else if (error.status === 400)
      return Observable.throw(new BadInput())
    else
      return Observable.throw(new AppError);

  }



}
