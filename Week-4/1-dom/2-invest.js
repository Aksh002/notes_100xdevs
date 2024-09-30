const express=require("express")
const app=express()
const port=3000

app.get("/invest",function(req,res){
    const p=req.query.principal
    const r=req.query.rate
    const t=req.query.time

    const intrest=(p*r*t)/100
    const tot=p+intrest

    res.send({
        intrest: intrest,
        total: tot
    })
})
app.listen(port)