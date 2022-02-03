/*
Union Sorted Arrays
Efficiently combine two already-sorted arrays into a new sorted array containing the
multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].
*/


function union(arr1,arr2){
let i=0;
let j=0;
let result=[];
let match;


while(i<arr1.length || j<arr2.length){
    if(arr1[i]==arr2[j]){
        match=arr1[i]
        result.push(arr1[i])
        i++;
        j++;
    }
    else if(arr1[i]==match){
        result.push(match);
        i++;
    }
    else if(arr2[j]==match){
        result.push(match);
        j++;
    }
    else if(arr1[i]>arr2[j]){
        result.push(arr2[j])
        j++;
    }
    else{
        result.push(arr1[i])
        i++;
    }
}
return result;

}

console.log(union([1,2,2,2,7],[2,2,6,6,7,7] )) //[1,2,2,2,6,6,7]
console.log(runion([1,2,2,2,7],[2,2,6,6,7,7] )) 
//recursively

function runion(arr1,arr2,i=0,j=0,result=[]){
    if(i>=arr1.length && j>=arr2.length){
        return result;
    }
    
    
    if(arr1[i]==arr2[j]){
        result.push(arr1[i]);
        return runion(arr1,arr2,i+1,j+1,result);            
        }
    if(arr1[i]>arr2[j] ){
            result.push(arr2[j]);
            return runion(arr1,arr2,i,j+1,result);
        }
    if(arr1[i]<arr2[j] ){
            result.push(arr1[i]);
            return runion(arr1,arr2,i+1,j,result);
        }

    return result;
    
    }