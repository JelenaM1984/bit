class Exame {
  constructor(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
  }
  getExameInfo() {
    return `${this.subject.getSubjectName()} - ${this.student.getStudentData()} ${
      this.grade
    }`;
  }
  getStatistics(){
    
  }
  hasPased() {
    return this.grade > 5;
  }
  hasFailed() {
    return this.grade < 5;
  }
}

// var examination=new Exame('Pera','Peric','10');
// console.log(examination);
