//calculate the binary value of an integer. 

function dec2binary(num){
    let result = '';
    let remainder;
    let dec = num;

    while(dec>0){

        remainder = dec%2;
        if (remainder!=0){
            remainder=1;          
            result = remainder.toString().concat(result);
            
        }
        else{
            result = remainder.toString().concat(result);
        }
        dec = Math.floor(dec/2);
    }
    
 return result;
}


console.log(dec2binary(29)) //"11100"