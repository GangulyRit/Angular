import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
    posts: any[];

    constructor(private service: PostService) {
    }

    ngOnInit() {
      this.service.getPost()
        .subscribe(response => {
          console.log(response.json());
          this.posts = response.json();
        }, error => {
          console.log(error);
        });
    }

    createPosts(input: HTMLInputElement){
      let post: any = { title: input.value };
      input.value = '';
      this.service.createPost(post)
        .subscribe(
          response => {
            post.id = response.json().id;
            this.posts.splice(0,0, post);
            console.log(response.json());
          },
          (error: Response) => {
            if(error.status === 400)
              this.form.setErrors(error.json());
            else
              console.log(error);
        });
    }

    updatePosts(post){
      this.service.updatePost(post)
        .subscribe(response => {
          console.log(response.json());
        }, error => {
          console.log(error);
        });


    }

    deletePosts(post) {
      this.service.deletePost(post)
        .subscribe(
          response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          console.log(response.json());
        },
          (error: Response) => {
          if(error.status === 404)
            alert('This post has already been deleted');
          else
            console.log(error);
        });
    }


}
