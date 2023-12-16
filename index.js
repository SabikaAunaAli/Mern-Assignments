export function settime(x){
    for (let i=1 ; i<=10 ; i++){
    
        setTimeout(function(){
         let result = x*i;
         console.log(`${x}  x  ${i}  =  ${result}`);
        },2000*i)   
    }}
    settime(5);