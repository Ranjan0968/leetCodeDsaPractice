// Remove Duplicate from Array

let array=[1,2,3,1,2,3,4];
let uniqueArr=[];

for(let i=0;i<array.length;i++){
    if(!uniqueArr.includes(array[i])){
        uniqueArr.push(array[i])
    }
    console.log(array[i])
}
console.log(uniqueArr);