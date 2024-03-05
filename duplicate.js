//Q4>Remove the duplicate values from a given array ["surya","arya","jeevana","jeevana","arya"]
const arr=["surya","arya","jeevana","jeevana","arya"]
const duplicate=arr.filter((value,index,arr)=>{
   return  arr.indexOf (value)==index;

})
console.log(duplicate);