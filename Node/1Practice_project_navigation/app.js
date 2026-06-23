const http=require('http')
const server=http.createServer((req,res)=>
{
res.setHeader('Content-type','text/html')
if(req.url==="/home")
{
    res.write(`<h1>Welcome to Home</h1>`)
    return res.end()
}
else if(req.url==="/men")
{
    res.write(`<h1>Welcome to Men</h1>`)
    return res.end()
}

else if(req.url==="/women")
{
    res.write(`<h1>Welcome to Women</h1>`)
    return res.end()
}
else if(req.url==="/kids")
{
    res.write(`<h1>Welcome to kids</h1>`)
    return res.end()
}
else if(req.url==="/cart")
{
    res.write(`<h1>Welcome to Cart</h1>`)
    return res.end()
}

res.write(`<ul>
    <li><a href="/home">Home</a></li>
     <li><a href="/men">men</a></li>
      <li><a href="/women">women</a></li>
       <li><a href="/kids">kids</a></li>
        <li><a href="/cart">cart</a></li>
</ul>`)
res.end()
})

const port=3000
server.listen(port,()=>{
    console.log(`server`)
})