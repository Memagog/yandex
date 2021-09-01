const pass = ( str ) => {    
    if(str.length>=1&&str.length<=Math.pow(10,20)){
        let arr = str.split("7")          
        let res = true;
        arr.forEach(e => {
            if(e.length%2===1&&e.length>0){
                res = false;
            }                        
        }); 
        str.split("").forEach((e)=>{
            if(e!=="1"&&e!=="7"){
                res = false;
            }
        })      
        return res; 
    }
    else return false;
    
}
console.log("result: " + pass("71137"))
