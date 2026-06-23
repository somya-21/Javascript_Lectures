// 1.npm init
// 2. npmi express nodemon

//create a server with cannot get
// const express=require('express')

// let app=express()

// app.listen((3000),()=>
// {
//     console.log("Server running")
// })


const express=require('express')
let app=express()

// app.use((req,res,next)=>
// {
//     console.log('second')
// // res.send(`<h1>Welcome second</h1>`)
// next()
// })

// app.use((req,res,next)=>
// {
//     console.log('first')
// res.send(`<h1>Welcome first</h1>`)
// })


//  app.use((req,res,next)=>
// {
//     console.log('first middleware')
// // res.send(`<h1>Welcome second</h1>`)
// next()
// })

//  app.use((req,res,next)=>
// {
//     console.log('second middleware')
// // res.send(`<h1>Welcome second</h1>`)
// next()
// })
//by default
// app.use((req,res,next)=>
// {
//     console.log('third middleware')
// res.send(`<h1>Welcome first</h1>`)
// })


app.get("/",(req,res,next)=>
{
    res.send("<h1>Home getpage</h1>")
})

app.get("/contact",(req,res,next)=>
{
    res.send("<h1>contact getpage</h1>")
})

// console.log("sdggd")
app.listen(3000,console.log("running"))