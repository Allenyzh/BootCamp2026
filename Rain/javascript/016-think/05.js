function times(a,b,delay){
    return new Promise((Resolve) =>{(
setTimeout(() => { Resolve( a * b);}, delay)
)
})
}


const promise = times(2,3,4000);
promise.then((value) => {
    console.log(value)
})

