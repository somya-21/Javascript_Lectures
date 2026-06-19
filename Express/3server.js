const http=require('http')//core module
const server=http.createServer((req,res)=>//first is req and second is respomse
{
  console.log(req.url,req.method)
  //server is running on 3000
///(url) GET(method)   


//send response
res.setHeader('Content-Type','text/html')

// res.write(<h1>Welcome page</h1>)
//error

res.write('<h1>Welcome page</h1>')
res.write('<p>Like/share/subscribed</p>')
res.end()


    // process.exit()//infinte process//stop event loop//jb kch nhi likha ho tbhji nhi toh upr wala error
})
const port=3000
server.listen((port),()=>
{
    console.log(`server is running on ${port}`)
})