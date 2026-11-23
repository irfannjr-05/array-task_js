const numbers = [3, 8, 15, 22, 5, 11, 18, 7, 10, 14];
// Find the first number that leaves a remainder of 1 when divided by 3.

let result=numbers.find((eachNum,index)=>eachNum%3==1)
console.log(result);