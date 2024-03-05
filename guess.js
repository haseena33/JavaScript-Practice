//Q9>Guess the output of the given 
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i <=5; i++) {
if(i==2) continue
  console.log(i)
}
//1,3,4,5,3,3,3
//set time out wait for 1ms after completion of 2nd for loop 1st for loop will execute.