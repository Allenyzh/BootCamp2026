let c;

function times(a,b){
    c = a * b;
}

function consoles(){
console.log(c)
}
setTimeout(2000,times,2,3)
setTimeout(3000,consoles,2,3)
