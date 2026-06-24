
// })

// app.get("/contact",(req,res,next)=>
// {
//     res.send(
//         `<h1>Enter Your Details</h1>
//         <form action="/contact" method="Post">
// <input type="text" placeholder="enter your name" name="username">
// <input type="email" placeholder="enter your email" name="email">
// <input type="submit" >
//         </form>`
//     )
// })


// app.post("/contact",(req,res,next)=>
// {

//     console.log("before parsing=",req.body)
//         next()
// })
// app.use(express.urlencoded())
// app.post("/contact",(req,res,next)=>
// {
//     res.send(
//      `<h1>Your data saved</h1>`
//     )
//     console.log("After parsing=",req.body)
// })
// // before parsing= undefined
// // After parsing= { username: '919012741846', email: 'tandonsomya2003@gmail.com' }

// //we use app.use(bodyParse.urlcoded())
// // npm i body parser
// //const bodyParse=require('bodyParse')
// app.listen(3000,console.log("runnig"))


const express=require('express')

const app=express()

app.get("/",(req,res,next)=>
{
    console.log("first middleware")
    res.send(`<h1>Welcome </h1><br><a href="/contact">Go to loign</a>`)
    
})

app.get("/contact",(req,res,next)=>
{
    res.send(
        `<h1>Enter Your Details</h1>
        <form action="/contact" method="Post">
<input type="text" placeholder="enter your name" name="username">
<input type="email" placeholder="enter your email" name="email">
<input type="submit" >
        </form>`
    )
})


app.post("/contact",(req,res,next)=>
{

    console.log("before parsing=",req.body)
        next()
})
app.use(express.urlencoded())
app.post("/contact",(req,res,next)=>
{
    res.send(
     `<h1>Your data saved</h1>`
    )
    console.log("After parsing=",req.body)
})
// before parsing= undefined
// After parsing= { username: '919012741846', email: 'tandonsomya2003@gmail.com' }

//we use app.use(bodyParse.urlcoded())
// npm i body parser
//const bodyParse=require('bodyParse')
app.listen(3000,console.log("runnig"))// const express=require('express')

// const app=express()

// app.get("/",(req,res,next)=>
// {
//     console.log("first middleware")
//     res.send(`<h1>Welcome </h1><br><a href="/contact">Go to loign</a>`)
    