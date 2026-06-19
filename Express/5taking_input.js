const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>
{
if(req.url==="/")
{
    res.setHeader('Content-Type','text/html')
    res.write(`
        <h1>Enter Your Details
        <form action="/products" method="post">
        Name:<input type="text" placeholder="enter your name" name="username">
        <br>
        <input type="radio" name="gender" value="male">male
        <input type="radio" name="gender" value="female">female
<input type="submit">Submiy
        </form>`)
        return res.end()
}


else if(req.url.toLowerCase()==='/products' && req.method=="post")
{
res.setHeader('Content-Type','text/html')
res.write('<h1>your data saved</h1>')
fs.writeFileSync('submit_records.txt',"data")
res.statusCode(302);
return res.end()
}
}
)

const port=3000;

server.listen((port),()=>
{
console.log(`Server running on port${port}`)
})