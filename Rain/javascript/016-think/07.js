function times(a,b,delay){
    return new Promise((resolve) =>{
setTimeout(() => { resolve( a * b);}, delay)

})
}

function timesNew(value,b,delay){
 return new Promise((resolve) =>{
setTimeout(() => { resolve( value/b);}, delay)
})
}

const promise = times(2,6,2000);
promise
.then((value) => {
    console.log(value)
    return timesNew(value,3,4000)
})
.then((value) =>{
 return console.log(value)
})

.catch((err) =>{
console.error(err)
})
