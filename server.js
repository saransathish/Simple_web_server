const http = require('http')
const PORT = 4000
const fs = require('fs')


const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-type':'text/html'})
    fs.readFile('index.html' , (error,data) => {
        if (error){
            res.writeHead(404)
            res.write('page not found')
        }
        else{
            res.write(data)
        }
        res.end();
    })
    

})

server.listen(PORT,(error) => {
    if (error){
        console.log(error)
    }
    else{
        console.log('server is running on :' + PORT)
    }
    
})