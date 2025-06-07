function add(a,b){
    return a+b;
}

function divide (a,b){
if(b===0){
    throw new Error ('divide by 0 not possible');
    
}

return a/b;
}

module.exports ={
    add, divide
}