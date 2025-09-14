const express=require('express');
const app=express();
const port=8080;
const path=require("path")
app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.get("/search/:username",(req,res)=>{
    res.send(req.params.username);
})

app.set("views",path.join(__dirname,"/views"))

// app.get("/search",(req,res)=>{
//     const {q,color}=req.query;
//     console.log("===>",q,color);
//     res.send(`search result,==> ${q} and color is ${color}`)
// })

app.get("/rollDice",(req,res)=>{
    const dice=Math.random()*6
    res.render("rollDice.ejs",{dice})
})
app.get("/ig/:username",(req,res)=>{
    const {username}=req.params;
    console.log("username",username);
    res.render("instagram.ejs",{username})
})

app.get("/view",(req,res)=>{
    res.render("home.ejs")
})

app.use((req,res)=>{    
    console.log("Middleware Request Received");
    res.send("fruits")
})
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});