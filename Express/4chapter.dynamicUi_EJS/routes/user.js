
const path=require('path')//core
//external
const express=require('express')
const userhandle=express.Router()
// const rootdir=require('../utils/path')
const {registerHomes}=require('./host')
userhandle.get("/",(req,res,next)=>
{
    // res.sendFile(path.join(__dirname,'../','views','home.html'))
    console.log(registerHomes)
        // res.sendFile(path.join(rootdir,'views','home.html'))
       res.render('home',{registerHomes:registerHomes,pagetitle:'headerusingpartials'})

})


module.exports=userhandle