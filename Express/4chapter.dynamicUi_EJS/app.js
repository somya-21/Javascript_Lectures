// 1 $ npm install --save ejs

const path=require('path')//core
const express=require('express')
const {hosthandle}=require('./routes/host')
const userhandle=require('./routes/user')
const rootdir=require('./utils/path')
const app=express()

//2
app.set('view engine','ejs')
app.set('views','views')

//common path
app.use(userhandle)
app.use(express.urlencoded())
app.use("/host",hosthandle)

//adding css file
app.use(express.static(path.join(rootdir,'public')))

app.use((req,res,next)=>
{
    res.status(404).render('404',{pagetitle:'pageNotFou'})
})
app.listen((3000),console.log("Server running"))