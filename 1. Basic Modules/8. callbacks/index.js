function person (name, callbackFn){
console.log('hello', `${name}`)
callbackFn()
}

function address(){
    console.log("India")
}

person('Vrishhti', address)

const fs=require('fs')


fs.readFile('input.txt', 'utf8', (err,data)=>{
    if(err){
        console.log('Eroor reading file', err);
        return;
    }
    console.log(data)


    const modifyFileData = data.toUpperCase();

    fs.writeFile('output.txt', modifyFileData, (err)=>{
        if(err){
            console.log("error in writing", err);
            return;
        }
        console.log("data written in new file");

        fs.readFile('output.txt', 'utf8', (err, data)=>{
            if(err){
                console.log('Eroor reading file', err);
                return;
            }

            console.log(data)

        })
        
    } )
})