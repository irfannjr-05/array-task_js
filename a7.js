const numbers = [3, 8, 15, 22, 5, 11, 18, 7, 10, 14];
// Find the first even number.

let result=numbers.find((eachNum,index)=>eachNum%2==0)
console.log(result)