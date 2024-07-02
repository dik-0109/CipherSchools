const {connect} = require("mongoose");
const MONGO_URL ="mongodb+srv://dik0109:Lanjewar@123@cluster0.hxq8kvb.mongodb.net"
const DB_NAME = `cs-mern`;
async function connectDB(){
    try{
    await connect(`${MONGO_URL}/${DB_NAME}`);

console.log("Mongodb connected");}
catch(err){
    console.error(err);
}}
connectDB();
