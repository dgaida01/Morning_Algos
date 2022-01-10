

function bubbleSort(array) {
    // let temp; - only needed for traditional swap
    for (let j = 0; j < arr.length - 1; j++) {


        for (let i = 0; i < (array.length - 1)-j; i++) {
            if (array[i] > array[i + 1]) {
                [array[i],array[i+1]] = [arr[i+1],arr[i]]  //same as below commented out code uses deconstructed swap
                // temp = array[i];
                // array[i] = array[i + 1];
                // array[i + 1] = temp;
            }
        }
    }
  
}

let arr=[10,9,8,7,5,4,3,2];
bubbleSort(arr);
console.log(arr);