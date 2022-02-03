function partition(arr, start = 0, end=arr.length-1){
    let pivot = arr[start];
    let pivIdx=start;
    let pivlocation = pivIdx

    for(start; start<=end; start++){
        if(arr[start]<pivot){
            [arr[start],arr[pivIdx]]=[arr[pivIdx],arr[start]];
            pivIdx++;
            pivlocation = start;
        }
        
    }
    if(arr[pivlocation]<arr[pivIdx])
    [arr[pivlocation],arr[pivIdx]]=[arr[pivIdx],arr[pivlocation]];
    // console.log(arr);
    return pivIdx;
}


let quickSort =(arr,left =0,right = arr.length-1)=>{

    if (left>=right){
        return arr
    }
    

    let idx = partition(arr,left,right)
        quickSort(arr,left,idx-1);
        quickSort(arr,idx+1,right);

    console.log(arr);
    
}



let arr=[30, 40, 99,10,  8,600, 12, 15, 20 ];
// console.log(partition(arr,6,7));
quickSort(arr);
