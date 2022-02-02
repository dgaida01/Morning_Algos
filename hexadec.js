//convert decimal to hex value
function toHex(num){
    let conversionString = '0123456789ABCDEF'
    let result = '';
    let remainder;
    let dec = num;

    while(dec>0){

        remainder = dec%16;
        result = conversionString[remainder].concat(result);
        dec = Math.floor(dec/16);
    }
    
return result;
}

console.log(toHex(200));
// console.log(15%16)