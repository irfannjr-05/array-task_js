const numbers = [3, 8, 15, 22, 5, 11, 18, 7, 10, 14];
// Get all numbers that are not divisible by 2.

for(let i=0;i<=numbers.length-1;i++){
    if(numbers[i]%2!=0){
        console.log(numbers[i]);
    }
}