var 
class Person{
    constructor(name){
        this.name=name;
    }
    getSubjectName(){
return`${this.name}`;
    }
}
var student= new Person('pera peric');
console.log(student);