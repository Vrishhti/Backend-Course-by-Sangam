const http = require('http')

const server= http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    res.end("hello, this is the response");
       
    
});

const port= 3000;

server.listen(port)
console.log("seerver is now listening to port", port)