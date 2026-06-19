const http=require('http')

const server=http.createServer((req,res)=>
{
    res.setHeader('Content-Type','text/html')
//  if(req.url==="/home")
// {
//     res.write(`<h1>welcome to Home</h1>`)
//         return res.end()

// }
// else if(req.url==="/men")
// {
//     res.write(`<h1>welcome to men</h1>`)
//         return res.end()

// }
// else if(req.url==="/women")
// {
//     res.write(`<h1>welcome to women</h1>`)
//         return res.end()

// }
// else if(req.url==="/cart")
// {
//     res.write(`<h1>welcome to cart</h1>`)
//         return res.end()

// }
//  else if(req.url==="/kids")
// {
//     res.write(`<h1>welcome to kid</h1>`)
//         return res.end()

// }


   
    res.write(
       ` <a href="/home">home</a><br>
                <a href="/men">men</a><br>
                        <a href="/women">women</a><br>
                                <a href="/kids">kids</a><br>
                                        <a href="/cart">cart</a>`
    )
  return  res.end()
})

const port=3000
server.listen((port),()=>
{
    console.log(`Server runig on http://localhost${port}`)
})