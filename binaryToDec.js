function binaryToDec(str){
    let power=str.length -1;
    let result=0;

    for(let i=0; i<str.length; i++){
        
        if (str.charAt(i)==1){
            result=result+(2**power);
            
        }
       
            power--;
       
    }

     console.log(result);
        
}


binaryToDec('11')//

