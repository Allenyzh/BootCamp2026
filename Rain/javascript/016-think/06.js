function times(a,b,delay){
    return new Promise((resolve,reject) =>{
        if( b == 0){
            reject("B cant be 0")
        }
setTimeout(() => { resolve( a / b);}, delay)

})
}


const promise = times(2,0,4000);
promise.then((value) => {
    console.log(value)
})

.catch((err)=>{
console.error(err)
})
    
