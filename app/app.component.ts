import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity 2 - Databinding - Bedoria & Enopia';
  label = "Score:";
  inputValue="";
  numberValue = 0;

  recieveAdd(){
    this.numberValue++
    this.inputValue = this.numberValue.toString();
  }
  receiveSubtract(){
    this.numberValue--;
    this.inputValue = this.numberValue.toString();
  }
}
