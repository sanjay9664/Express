const express = require("express")

const app = express()

const port  = 3000
app.get("/" , (req, res)=>{
    
    res.send("<h1>Hellow node js</h1>")
})
app.get("/about" , (req, res)=>{
    
    res.send("<h1>This is my About page</h1>")
})
app.get("/blog" , (req, res)=>{
    
    res.send("<h1>This is my Blog page</h1>")
})

app.listen(port,()=>{
    console.log("My portal is open on 3000")
})