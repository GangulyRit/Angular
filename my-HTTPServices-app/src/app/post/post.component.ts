import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {subscribeTo} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(http: Http) {

    http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        console.log(response);
      });
  }

  ngOnInit() {
  }

}
