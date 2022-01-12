

function selectionSort(arr){
console.log(arr);
    for(let i=0; i<arr.length; i++){
        let bigIndex=0;
        let bigValue=arr[bigIndex];
        
        for(let j=0; j<arr.length-i; j++){
            if(bigValue<arr[j]){
                bigValue=arr[j]
                bigIndex=j;
                
            }
        }
        
        [arr[bigIndex],arr[arr.length-i-1]]=[arr[arr.length-i-1],arr[bigIndex]];
        console.log(arr);
    
    }
    
    return arr
}



console.log(selectionSort([5,7,2,9,1,4]))