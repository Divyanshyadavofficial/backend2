const express = require('express')
const app = express()
app.use(function(req,res,next){
    console.log('middle ware chala');
    next();
})
app.get('/',function(req,res){
    res.send('hello worldi ')

})
app.get("/profile",function(req,res){
    return next(new Error("something went wrong"))
})
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('SomethingBroke');
})
app.listen(3000)