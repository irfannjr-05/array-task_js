const numbers = [3, 8, 15, 22, 5, 11, 18, 7, 10, 14];
// Find the first number divisible by 5.

let result=numbers.find((eachNum,index)=>eachNum%5==0)
console.log(result);