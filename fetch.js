//Q1>Fetch Given Api "https://jsonplaceholder.typicode.com/todos"?
const url="https://jsonplaceholder.typicode.com/todos"
fetch (url)
.then((res)=>res.json())
.then((result)=>console.log(result))
.catch((err)=>console.log(err));


