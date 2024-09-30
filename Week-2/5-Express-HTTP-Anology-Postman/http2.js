const express =require('express')
const bodyparser=require('body-parser')
const app=express()
const port=3000

let ls=[];

function reg(details){
    ls.push(details);
}

//use
app.use(bodyparser.json())

//Registration of the user
app.post('/reg',function(req,res){
    reg(req.body);
    console.log(ls)
    res.send("Data saved Succesfully")
})

//GET: To get the info abt the user
app.get('/',function(req,res){
    let details=[]
    for(j=0;j<ls.length;j++){
        const t=ls[j].kidneys.length
        let h=0;
        let n=ls[j].name
        for (i=0;i<t;i++){
            if (ls[j].kidneys[i].healthy=="True")
                h=h+1;
        }
        let u=t-h
        details.push({
            n,
            t,
            h,
            u
        })
    }  
        res.json(details)
    }
)

//POST: To post updation of details of the user
app.post('/',function(req,res){
    const ishealthy=req.body.ishealthy
    ls[req.body.person].kidneys.push({"healthy":ishealthy})
    res.json({
        msg:"Done!"
    })
})

//PUT: To put/update the info of all the kidneys being healthy
app.put('/',function(req,res){
    let count=0;
    let pos=req.body.pos;
    for (i=0;i<(ls[pos].kidneys.length);i++){
        if (ls[pos].kidneys[i].healthy=="False"){
            ls[pos].kidneys[i].healthy="True"
            count=count+1
        }
    }
    if (count==0)
        res.send("All kidneys are already Healthy")
    else
        res.send("Surgery done!! All kidneys are healthy")
})

//DELETE: To delete all the enhealthy kidney of the user 
app.delete('/',function(req,res){
    let pos = req.body.pos
    let healthykidneys=[]
    let count=0
    for (i=0;i<(ls[pos].kidneys.length);i++){
        if (ls[pos].kidneys[i].healthy=="True"){
            healthykidneys.push({
                "healthy":"True"
            })
        }
        else 
            count=count+1
    }
    if (count!=0){
        ls[pos].kidneys=healthykidneys;
        res.json({msg:"Unhealthy organs removed succesfully"})
    }
    else
        res.status(411).send("NO Unhealthy organs to remove")               // Status code is necessary bcs we check it in frontend
})


app.listen(port,function(){
    console.log(`Server is running on http://localhost:${port}`);
})

// NOTE :- Usually in post request provided body is stored n appended in databses , but here its manipulated on codedatabase only
