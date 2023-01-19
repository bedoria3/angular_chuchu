import { Component } from '@angular/core';
import { Student } from './student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Activity 3: Directive and Interface - Bedoria & Enopia"
  label = 'List of Students';
  isAddStudent = false;
  studentsList: Student[] = [
    {
    id:0,
    firstName: "Soseit",
    lastName: "Bedoria",
    gender: "Female",
    age: 21,
    home_address: "Manlapay, Dalaguete, Cebu",
    nationality: "Filipino",
    status: "Single",
    elementary_school: "Manlapay Elementary School",
    high_school: "Manlapay National High School",
    college: "University of San Carlos- Talamban Campus",

  },
  {
    id:1,
    firstName: "Via",
    lastName: "Enopia",
    gender: "Female",
    age: 21,
    home_address: "El Pardo, Boljoon, Cebu",
    nationality: "Filipino",
    status: "Single",
    elementary_school: "El Pardo Elementary School",
    high_school: "El Pardo National High School",
    college: "University of San Carlos- Talamban Campus",

  },
  {
    id:2,
    firstName: "Rey John",
    lastName: "Refolidon",
    gender: "Male",
    age: 26,
    home_address: "Taloot, Argao, Cebu",
    nationality: "Filipino",
    status: "Married",
    elementary_school: "Argao Elementary School",
    high_school: "Argao National High School"
  },
  {
    id:3,
    firstName: "Susan",
    lastName: "Bedoria",
    gender: "Female",
    age: 28,
    home_address: "Manlapay, Dalaguete, Cebu",
    nationality: "Filipino",
    status: "Married",
    elementary_school: "Manlapay Elementary School",
    high_school: "Manlapay National High School",
    college: "Cebu Technological University- Main Campus",
    degree: "Teacher",

  },
    {
    id:3,
    firstName: "Susan",
    lastName: "Bedoria",
    gender: "Female",
    age: 28,
    home_address: "Manlapay, Dalaguete, Cebu",
    nationality: "Filipino",
    status: "Married",
    elementary_school: "Manlapay Elementary School",
    high_school: "Manlapay National High School",
    college: "Cebu Technological University- Main Campus",
    degree: "Teacher",

  },
  {
    id:3,
    firstName: "Ronald",
    lastName: "Bedoria",
    gender: "Male",
    age: 25,
    home_address: "Manlapay, Dalaguete, Cebu",
    nationality: "Filipino",
    status: "Single",
    elementary_school: "Manlapay Elementary School",
    high_school: "Sister of Mary- Boystown",
    college: "Cebu Technological University- Main Campus",
    degree: "Engineer",
  }
]
  addStudent(student: Student){
    // console.log(student);
    this.studentsList.push(student);
    this.isAddStudent = false;
  }

  addNewStudent(){
    this.isAddStudent = true;
  }
}
