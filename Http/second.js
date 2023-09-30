const http = require('http')
const sever = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.write('Hello World , This is first page');
        res.end();
    }
    if(req.url === '/api/courses/' ){
        list = [
            {"name":"Zaw Zaw","age":20},
            {"name":"Kyaw Kyaw","age":25},
            {"name":"Aung Aung","age":22}
        ]
        res.write(JSON.stringify(list))
        res.end();
    }
})

sever.listen(3000)
console.log("listening on port 3000...")
