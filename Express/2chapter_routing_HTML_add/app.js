
const path=require('path')//core
const express=require('express')
const hosthandle=require('./routes/host')
const userhandle=require('./routes/user')
const rootdir=require('./utils/path')
const app=express()

// app.use(userhandle)
// app.use(express.urlencoded())
// app.use(hosthandle)

//common path
app.use(userhandle)
app.use(express.urlencoded())
app.use("/host",hosthandle)

//adding css file
app.use(express.static(path.join(rootdir,'public')))

app.use((req,res,next)=>
{
    res.status(404).sendFile(path.join(rootdir,'views','404.html'))
})
app.listen((3000),console.log("hello"))