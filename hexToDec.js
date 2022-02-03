function hexToDec(str){
    let power=str.length -1;
    let result=0;
    let value =0;

    for(let i=0; i<str.length; i++){
        value = str.charAt(i);
        if (isNaN(value)){
            switch (value) {
                case 'A':
                    value = 10;
                    break;
                case 'B':
                    value = 11; 
                    break;           
                case 'C':
                    value = 12;            
                    break;           
                case 'D':
                    value = 13;
                    break;            
                case 'E':
                    value = 14;
                    break;            
                case 'F':
                    value = 15;
                    break;            
                default:
                    break;
            }
            
            
        }
        result=result+(16**power * value);
        power--;
       
    }

     console.log(result);
        
}