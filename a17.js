const numbers = [3, 8, 15, 22, 5, 11, 18, 7, 10, 14];
// Get all numbers divisible by 5

numbers.forEach((eachNum,index)=>{
    if(eachNum%5==0){
        console.log(eachNum)
    }
})