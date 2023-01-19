import { Component, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  ngOnInit(){
    this.studentForm.reset();
  }
  @Output() studentOut = new EventEmitter();

  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(0),
    home_address: new FormControl(''),
    nationality: new FormControl(''),
    elementary_school: new FormControl(''),
    high_school: new FormControl(''),
    colleege: new FormControl(''),
    degree: new FormControl(''),
    status: new FormControl('')

  })

  addStudent(){
    // console.log(this.studentForm.value)
    this.studentOut.emit(this.studentForm.value)
    this.studentForm.reset();
  }
}
