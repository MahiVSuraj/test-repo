import express from "express";
const app = express();
import 'dotenv/config'


app.get('/',(req,res)=>
{
    res.send("Hello world!");
})

app.get('/about',(req,res)=>
{
    res.send("<h1>Mai Suraj!</h1>");
})

app.listen(process.env.PORT,()=>
{
    console.log(`Listening on port ${process.env.PORT}`);
})