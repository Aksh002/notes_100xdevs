const express=require("express")
const app=express()
const port=3000

// We will get the CORS(Cross-Origin Resource Sharing) error if we do not import this and implement app.use to it,  
const cors=require("cors")
app.use(cors())
app.get("/sum",function(req,res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    const sum=a+b
    res.send(sum.toString())
})
app.listen(port)