
const path=require('path')//core
//external
const express=require('express')
const userhandle=express.Router()
const rootdir=require('../utils/path')

userhandle.get("/",(req,res,next)=>
{
    // res.sendFile(path.join(__dirname,'../','views','home.html'))
        res.sendFile(path.join(rootdir,'views','home.html'))

})


module.exports=userhandle