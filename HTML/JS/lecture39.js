require("./appMongoose");
const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("This is some response from your first node.js server")
});
app.get("/add",(req,res)=>{
    let{a: firstNumber,b: SecondNumber} = req.query;
    let sum = parseInt(firstNumber)+parseInt(SecondNumber);
    res.send({sum});
});
app.post("/add-task",(req,res)=>{
    const task = new Task({title:"Test Task", description : "Test Task Desc"});
    await task.save();
    return res.status(201).send({message:saved})
})
app.listen(8080,()=>{
    console.log("Server is running");
});