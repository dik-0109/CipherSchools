// const addNumbers = (...args)=>{
//     let sum =0;
//     args.forEach((arg)=> (sum += args));
//     return sum;
// };
// console.log(addNumbers(4,5,1,-2,10,5));
// const http = require("http");
// const server = http.createServer((req,res)=>{
// res.write("This is some response from your first node.js server");
// res.end();
// });

// server.listen(3003,()=>{
//     console.log("Server is running");
// });
// const express = require("express");
// const app = express();
// app.get("/add",(req,res)=>{
//     res.send("This is some response from your first node.js server")
// });
// app.listen(8080,()=>{
//     console.log("Server is running");
// });
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
app.listen(8080,()=>{
    console.log("Server is running");
});