function combine(arr1,arr2){
    let idx1=0;
    let idx2=0;
    let result=[];
    
    while(idx1<=arr1.length-1 && idx2<=arr2.length-1){
            if(arr1[idx1]<=arr2[idx2]){
            
            result[result.length]=arr1[idx1];
            idx1++;
            
        }
        else{
            result[result.length]=arr2[idx2];
            idx2++;
        }
    }

   while(idx1<=arr1.length-1){
    result[result.length]=arr1[idx1];
    idx1++;
   }
   while(idx2<=arr2.length-1)  {
    result[result.length]=arr2[idx2];
    idx2++;
   }
   return result;
}



// let y = [-3, 6, 9,1,5,6,6,8,14, 10, 15,20,22,28]
let y = [20,4,39,44,18,13,8,-5]
console.log(mergeSort(y)); 

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    else{
    let mid = Math.floor(arr.length/2);
    let larr = arr.slice(0,mid);
    let rarr = arr.slice(mid);
    let leftArray = mergeSort(larr);
    let rightArray =mergeSort(rarr);    
    return combine(leftArray,rightArray);
    }
}