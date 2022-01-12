
function insertSort(arr){
for(let i=1; i<arr.length; i++){
    let j=i;
    
    while (arr[j]<arr[j-1] && j!=0){
       [arr[j],arr[j-1]] = [arr[j-1],arr[j]] ;
       j--;
    }
}}

let arr = [ 10,9,8,7];
insertSort(arr);
console.log(arr);
