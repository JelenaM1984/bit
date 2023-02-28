export class Student {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getStudentData() {
    return `${this.name} ${this.surname}`;
  }
}
// var student=new Student();
// console.log(student)
