import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Output() addOut= new EventEmitter();
  inputValue="";
  numberValue = 0;

  receiveAdd(){
    this.addOut.emit();
  }
}
