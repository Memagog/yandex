
// const t = new Array(9999999).fill(() => [7, 711, 1111][Math.floor(Math.random() * 3)]).map(f => f()).join('')

// const pass = ( str ) => {      
//     if(str.length>=1&&str.length<=3e10){
//         let arr = str.split("7")        
//         let res = true;
        
//         let fake = [0,2,3,4,5,6,8,9];
//         for (let i = 0; i < fake.length; i++) {         
//             if(str.includes((fake[i]+""))){
//                 res = false;
//                 break;
//             }
//         }               
//         if(res){
//             console.log("tresh")
//             for (let i = 0; i < arr.length; i++) {
//                 const e = arr[i];
//                 if((e.length>=6&&e.length%4!=0&&i===0)||(e.length===2&&i===0)){
//                     res = false ;
//                     break;
//                 }
//                 if((e.length%2===1&&e.length>0)){
//                     res = false; 
//                     break;               
//                 } 
//             }            
//         }        
//         return res; 
//     }
//     else return false;
    
// }
const password = (str) =>{
    
    let index = "";
    if(str.includes("7")){        
        let start = str.substring(0, str.indexOf("7"));
        if((start.length%2!==0)||(start==="11")||(start.length%4===2&&start.length>=6)){    
            return false
        }    
    }
    else {       
        if((str.length%4===2&&str.length>=6)||str==="11"||str.length===0){           
            return false
        }          
    }

    if(str.length>=1&&str.length<=3e10){       
        for (let i = 0; i < str.length; i++) {
            const e = str[i];      
            if(e ==="1"){
                index+=e
            }       
            else if((e!=="1" && e==="7")) {
                if(index.length%2!==0){                    
                    return false               
                }                
                index =""
            }
            else return false                   
        }
        if(index.length%2!==0){         
            return false
        }
        else return true  
    }
    else return false
}
console.log(password("1111117"))
// console.log(t)
// console.log(pass(t))

