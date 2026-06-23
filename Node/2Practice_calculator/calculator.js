const http=require('http')
const calculator=(req,res)=>
{
    res.setHeader('Content-Type','text/html')
    if(req.url==='/calculate')
    {
        res.write(
         `   <h1>calculator</h1>
            <form action='/cal' method='post'>
<input type="number" name="1operand"/>
<input type="number" name="1operand"/>
<input type="submit" >Calculate</input>
            </form>`
        )
        res.end();
    }

res.write("Welcome to Home Page")
res.write(`<br><a href="/calculate">
    calculator
</a>`)
res.end();
}
module.exports=calculator