const numbers = [3, 8, 15, 22, 5, 11, 18, 7, 10, 14];
// Print the sum of each number and its index
let sumNum=0
let sumIndex=0
numbers.forEach((eachNum,index)=>{
    sumNum+=eachNum
    sumIndex+=index
})
console.log(sumNum,sumIndex)