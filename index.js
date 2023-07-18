const express = require("express")

const app = express()

const port  = 3000
app.get("/" , (req, res)=>{
    
    res.send("This is my Home page")
})
app.get("/about" , (req, res)=>{
    
    res.send("This is my About page")
})
app.get("/blog" , (req, res)=>{
    
    res.send("This is my Blog page")
})

app.listen(port,()=>{
    console.log("My portal is open on 3000")
})