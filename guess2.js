//Q10>Guess the output of a given function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms
  
  ));
}

async function main() {
  console.log('Start');

  await delay(1000);
  console.log('After 1 second');

  setTimeout(() => console.log('Inside setTimeout'), 0);

  await delay(2000);
  console.log('After 2 more seconds');

  console.log('End');
}

main();

//start
//After 1 second
//Inside setTimeout
//After 2 more seconds
//End
//console will execute first,async await will execute 2nd,promice will execute 3rd,settime out last.