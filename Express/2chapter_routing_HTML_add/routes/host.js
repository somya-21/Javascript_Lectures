const path=require('path')//core
const express=require('express')
const hosthandle=express.Router()
hosthandle.get("/addhome",(req,res,next)=>
{
     res.sendFile(path.join(__dirname,'../','views','addhome.html'))
})

hosthandle.post("/addhome",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,'../','views','addedhome.html'))
})
module.exports =hosthandle