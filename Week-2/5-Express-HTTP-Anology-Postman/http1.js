const express=require('express')
const app=express()
const port=3000

function sum(n){
    let ans =0;
    for (let i=0;i<n;i++)
        {
            ans=ans+i;
        }
    return ans;
}

app.get("/",function(req,res){
    res.send(sum(req.query.n).toString())       // THrough this req.query it takes query parameter from the user
})

app.listen(port)
