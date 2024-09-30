// To make our route more dynamic , We use " : "
// Eg-

const express=require("express")
const fs=require("fs")
app=express()
const port = 3000

app.get("/files/:fileName",function(req,res){
    const name=req.params.fileName
    console.log(name)
    fs.readFile(name,"utf-8",function(err,data){
        res.json({
            data
        })
    })
})
app.listen(port)