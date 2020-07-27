import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../services/post.service";
import {AppError} from "../common/app-error";
import {NotFoundError} from "../common/not-found-error";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any = [];
  isUpdating : boolean = false;

  post = {
    'userId' : 0,
    'id' : 0,
    'title' : '',
    'body' : ''
  };

  constructor(private postService:PostService) {

  }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(){
    this.postService.getAll()
      .subscribe(response => {
        this.posts = response;
      },(error:AppError) => {
          alert("Erreur inattendue");
      })
  }

  Add(){

    this.postService.add(this.post).subscribe(response =>
    { this.posts.unshift(response)},error => {
      alert("Erreur inattendue");
    });

    this.post = {
      'userId' : 0,
      'id' : 0,
      'title' : '',
      'body' : ''
    };


  }

  editPost(post){
    this.post = post;
    this.isUpdating = !this.isUpdating;
  }

  updatePost(){

    this.postService.edit(this.post.id,this.post)
      .subscribe((response) => {
        this.post = {
          'userId' : 0,
          'id' : 0,
          'title' : '',
          'body' : ''
        };
        this.isUpdating = !this.isUpdating;
      },error => {
        alert("Erreur inattendue");
      });
  }

  deletePost(post){

     this.postService.delete(post.id)
       .subscribe((response) => {
         this.posts.splice(this.posts.indexOf(post),1);
       },(error:AppError) => {
         if(error instanceof NotFoundError){
           alert('Ce post est dèjà supprimer');
         }
         else
         alert("Erreur inattendue");
       });
  }

}
