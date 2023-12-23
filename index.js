const http = require("http")

const server = http.createServer((req , res)=>{

    if(req.url === "/about") {
        res.end("<h1>About</h1>")
    }
    if(req.url === "/") {
        res.end("<h1>Home</h1>")
    }
    else{
        res.end("<h1>404 - Page not found</h1>")
    }

});

server.listen(5000,()=>{
    console.log("Server is working") 
});


