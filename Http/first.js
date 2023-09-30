const http = require('http')
const sever = http.createServer()

sever.on("connection",(socket)=>{
    console.log("New Connection ....")
})

sever.listen(3000)
console.log("listening on port 3000...")
