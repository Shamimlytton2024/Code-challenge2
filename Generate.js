const generateArray =(first, last) => {
    return Array.from([...Array(first.last), ...Array(first,last). fill(0),]);
}
console.log(generateArray(4,7)); 
// outputs : [4,5,6,7]
console.log (generateArray(-4,7));
//outputs: [-4,-3,-2,-1,0,1,2,3,4,5,6,7]