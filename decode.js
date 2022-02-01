

function decode(str){
    let txtValue='';
    let number='';
    let result='';
    let i=0;
while(i<str.length){

    if(isNaN(str[i])){
        txtValue = str[i];
        i++;
    }
    else{
        while(!isNaN(str[i])){
            // console.log(str[i]);
            number+=str[i];
            i++;
        }        
        for(let j=1; j<=number; j++){
            result+=txtValue;        
        }
        number='';
    }
}

return result;
}

str = "a1b1c2D10";
console.log(decode(str));
// str = "a1b1c20D5";
// console.log(decode(str));


