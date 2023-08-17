const express =require("express");
const app=express();

app.get('/add',(req,res)=>{
    const num1=parseInt(req.query.num1);
    const num2=parseInt(req.query.num2);
    const sum=num1+num2;
    res.json(sum);

})

app.get('/subtract',(req,res)=>{
    const num1=parseInt(req.query.num1);
    const num2=parseInt(req.query.num2);
    const difference=num1-num2;
    res.json(difference);
})
app.get('/product',(req,res)=>{
    const num1=parseInt(req.query.num1);
    const num2=parseInt(req.query.num2);
    const product=num1*num2;
    res.json(product);
})
app.get('/divide',(req,res)=>{
    const num1=parseInt(req.query.num1);
    const num2=parseInt(req.query.num2);
    if(num2===0){
        res.status(500).send("enter valid number 2")
    }
    const quotient=num1/num2;
    res.json(quotient);
})
app.listen("8000",()=>{
    console.log("server listening at port 8000");
})