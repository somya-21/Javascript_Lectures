const http=require('http')
const userhandler=require('./user')

const server=http.createServer(userhandler)

server.listen((3000),()=>
{
    console.log("server running")
})

//server.listen((3000),console.log("server running"))