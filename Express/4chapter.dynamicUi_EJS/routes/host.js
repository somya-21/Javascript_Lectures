const path=require('path')//core
const express=require('express')
const hosthandle=express.Router()
let homes=[]

hosthandle.get("/addhome",(req,res,next)=>
{
     res.sendFile(path.join(__dirname,'../','views','addhome.html'))

})

const registerHomes=[]
hosthandle.post("/addhome",(req,res,next)=>
{
    res.sendFile(path.join(__dirname,'../','views','addedhome.html'))
    registerHomes.push({homeAdress:req.body.address})
    console.log(req.body.address)
})
exports.hosthandle =hosthandle
exports.registerHomes =registerHomes