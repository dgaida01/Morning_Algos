const strEncode = (str) => {
    // let count = 1;
    // let shiny = "";
    // for (let i = 0; i < str.length; i++) {
    //     if(str[i] === str[i +1]) {
    //         count ++;
    //     }
    //     if(str[i] != str[i + 1]){
    //         shiny += str[i] + count;
    //         count = 1;
    //     }
    // }
    // return shiny;

    
    let shiny = {};
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if(str[i] != " ") {
            if(shiny[str[i]]==undefined){
                shiny[str[i]]=1;
            }else{
                shiny[str[i]]=shiny[str[1]]+1;
                
            }
        }
    }
    for (let i in shiny){
        result += i + shiny[i];
    }
    return result;
}