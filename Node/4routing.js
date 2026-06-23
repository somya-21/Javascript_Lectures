const http=require('http')

const server=http.createServer((req,res)=>
{
if(req.url==="/")
{
res.setHeader('Content-Type','text/html')
res.write('<h1>welcome to home page</h1>')
return res.end() //important
}
else if(req.url==='/products')
{
res.setHeader('Content-Type','text/html')
res.write('<h1>productpage</h1>')
return res.end()
}
res.setHeader('Content-Type','text/html')
res.write('<h1>404 page</h1>')
return res.end()



})

const port=3000
server.listen((port),()=>
{
    console.log(`server running on http://localhost${port}`)
})