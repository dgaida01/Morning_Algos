function quickSort(arr, left, right) {

    if (left >= right ) {
        return;
    }
    let piv = Math.floor(Math.abs((right - left) / 2));
    piv = left + piv;
    [arr[piv], arr[right]] = [arr[right], arr[piv]]
    piv = right;
    right = right - 1;
    

    while (left <=right ) {
        // console.log('Left Val is:' + arr[left] + 'vs ' + arr[piv]);
        while (arr[left] <= arr[piv] && left<arr.length-1) {
            left++;
            // console.log('Left Val is:' + arr[left] + 'vs ' + arr[piv]);
        }

        // console.log('Right Val is:' + arr[right] + 'vs ' + arr[piv]);
        while (arr[right] >= arr[piv] && right >= left) {
            right--;
            // console.log('Right Val is:' + arr[right] + 'vs ' + arr[piv]);
        }
        if(right>=0 && right>=left)
        [arr[left], arr[right]] = [arr[right], arr[left]]
        // console.log(arr);
        
    }

    [arr[left], arr[piv]] = [arr[piv], arr[left]];
    // console.log(arr);
 
    quickSort(arr, 0, left-1);
    
    quickSort(arr, left+1, piv);
    // console.log('making recursive call on Right'+(piv+1));


}

let MyArray = [2, 38, 20, 4,20, 39,99];
quickSort(MyArray, 0, (MyArray.length - 1));
console.log((Date.now()-start));
console.log(MyArray);

