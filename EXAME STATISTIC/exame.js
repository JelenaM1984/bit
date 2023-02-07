class Exame{
    constructor(subject,student,grade){
        this.subject=subject;
        this.student=student;
        this.grade=grade;
    }
    getExameInfo(){
        return `${this.name}, ${this.student}, ${this.grade}`
    }
    hasPased(){
        if (grade.val()>5){
            return 
        }
    }
}
// var examination=new Exame('Pera','Peric','10');
// console.log(examination);