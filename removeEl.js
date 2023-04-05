// Remove Elements

let array = [0,1,2,2,3,0,4,2];
// output [0,0,1,3,4]
const filterArray = array.filter(data=> data !=2)
filterArray.sort();
console.log(filterArray)
