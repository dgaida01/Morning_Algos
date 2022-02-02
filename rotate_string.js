

function rotate(str,num){
    let newPos=num;
    let newStr="";
    newPos = newPos%str.length;
    

    if(newPos==0){
        return str;
    }
    
   
    for(i=0;i<str.length; i++){
        newStr+=str[(str.length - newPos+i) % str.length];
        console.log(newStr);
    }
    return newStr;
}

//abcd  len 3

console.log(rotate("hello",2)) 
