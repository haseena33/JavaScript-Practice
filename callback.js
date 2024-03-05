//Q8>Write a call back function with one example ?
function fn1(a,b,call){
const result =a+b;
call(result);
}
function fn2(a,b,call){
    const result= a-b;
    call(result);
    }

    fn1(2,3,(sum)=>{
        console.log(sum)
        fn2(3,4,(sub)=>{
        console.log(sub)
    })
})

    