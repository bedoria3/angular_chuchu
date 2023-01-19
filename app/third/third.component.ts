import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  constructor(private httpService: HttpService){}
  ngOnInit(){
    // console.log('first component');
    this.httpService.getData('https://jsonplaceholder.typicode.com/comments')
    .subscribe(data => {
      console.table(data);
    })
  }
}
