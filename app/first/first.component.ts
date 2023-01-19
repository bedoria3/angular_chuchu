import { Post } from './../post';
import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  posts!: Post[]

  constructor(private httpService: HttpService){}
  ngOnInit(){
    // console.log('first component');
    this.httpService.getData('http://jsonplaceholder.typicode.com/posts')
    .subscribe(data => {
      // console.table(data);
      this.posts = data as Post[];
    })
  }
}
