//Q6>Write function using class constructor or function constructor
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.function=function(){
            return this.name+" "+this.age;
        }
    }
}
const p = new person("haseena",20);
console.log(p.function())