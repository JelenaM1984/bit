class Exame{
    constructor(subject,student,grade){
        this.subject=subject;
        this.student=student;
        this.grade=grade;
    }
    getExameInfo(){
        return `${this.name}, ${this.student}, ${this.grade}`
    }
}
var examination=new Exame('Pera','Peric','10');
console.log(examination);