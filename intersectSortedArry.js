// takes 2 sorted arrays and returns an array with common values, repeated the same amout as the array with less repeats
const intersect = (arr1,arr2)=>{
    let result =[];
    let i = 0;
    let j =0;

    while (i<arr1.length && j<arr2.length){

        if(arr1[i]==arr2[j]){
            result.push(arr1[i])
            i++;
            j++;
            
        }
        else if(arr1[i]<arr2[j]){
            i++
        }
        else{
            j++
        }
    }

    return result;
}

//return back a new array containing only the numbers that both arrays have in common. if there are repeats in any, have the output only contain the smallest number of repeats 

console.log(intersect([2,3,4,4,6],[1,4]  )) //[2,3,4,4,6]
console.log(intersect([1,2,3,3,4,4,6], [2,3,4,4,6] )) //[2,3,4,4,6]

/*
[2,3,4,4,6]
*/

console.log(intersect([1,2,3,3,4,4,6], [1,2,3,3,3,3,4,4,6] )) //[1,2,3,3,4,4,6]

/*
[1,2,3,3,4,4,6]
*/