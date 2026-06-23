const fs = require('fs')
const http=require('http')
const { json } = require('stream/consumers')
const { URLSearchParams } = require('url')

const server=http.createServer((req,res)=>
{
console.log(req.url)
if(req.url==='/')
{
    res.setHeader('Content-Type','text/html')
    res.write('Welcome Page')
    res.write('<a href="/login">Login</a>')
    res.end();
}
else if(req.url==='/login')
{
    res.setHeader('Content-Type','text/html')
    res.write(`<h1>Enter Your Details</h1>
        <form action='/contact' method='post'>
            <input type="text" placeholder="enter your name"
            name="username"
            >
            Enter your name
            </input>
           <input type="radio" name="gender" value="male">male
        <input type="radio" name="gender" value="female">female

            <input
            type="submit" > 
            </input>
        </form>`
    )
    res.end();
}
else if(req.url.toLowerCase()==='/contact' && req.method==="POST")
{

    //shows <buffer 122 1 2 2 2 >
// req.on('data',(chunks)=>
// {
//     console.log(chunks)
// })

// const body=[]
// req.on('data',(chunks)=>
// {
//     console.log(chunks)
//     body.push(chunks)
// })

// req.on('end',()=>
// {
//     const fullbody=Buffer.concat(body).toString();
//     console.log(fullbody)
// })
{/* <Buffer 75 73 65 72 6e 61 6d 65 3d 66 66 66 26 67 65 6e 64 65 72 3d 6d 61 6c 65>
username=fff&gender=male */}

const body=[]
req.on('data',(chunks)=>
{
    console.log(chunks)
    body.push(chunks)
})

req.on('end',()=>
{
    const fullbody=Buffer.concat(body).toString();
    const paras=new URLSearchParams(fullbody);
    // const bodyobject={}
    // for(const[key,value] of paras.entries())
    // {
    //     bodyobject[key]=value;
    // }


    //without loop
    const bodyobject=Object.fromEntries(paras)
    fs.writeFileSync('1userText',JSON.stringify(bodyobject))
})
res.statusCode=302;
res.setHeader('Location','/')
res.end();
}





})

server.listen((3000),console.log("server running"))