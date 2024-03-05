//Q7>Create a for loop that iterates up to 10 while outputting "fizz" at multiples of 3, 
for(let i=1;i<=10;i++){
    if(i%3==0){
        console.log("fizz");
    }
    else if(i%5==0 && i%3==0){
        console.log(" fizzbuzz");
    }
    else if(i%5==0){
        console.log("buzz");
    }
    else{
        console.log("no");
    }
}