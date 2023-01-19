import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent {
  @Output() subtractOut = new EventEmitter();
  inputValue="";
  numberValue = 0;

  receiveSubtract(){
    this.subtractOut.emit();
  }
}
