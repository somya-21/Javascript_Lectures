const fs=require('fs');
fs.writeFile("fileoutput.txt","my first file",(error)=>
{
    if(error)
        console.log('error occured')
    else
        console.log('file runnning successfully')


    
})