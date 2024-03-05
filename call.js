//Q2>Write a function using call apply and bind Method?
const person={
    name:"haseena",
    age:20
}
const person1={
    function :function(){
        return this.name+" "+this.age
    }
}
console.log(person1.function.call(person));
console.log(person1.function.apply(person));
console.log(person1.function.bind(person)())
