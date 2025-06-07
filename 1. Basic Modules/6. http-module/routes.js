const http= require('http');


const server=http.createServer((req,res)=>{

    //gives the current route
const url= req.url;
if(url=='/'){
res.end('Home Page')
}
else if(url==='/projects'){
    res.end('Projects page')
}
else{
    res.end("This pg can't be found")
}
})

const port= 3000
server.listen(port)
console.log("Server listening at", port)