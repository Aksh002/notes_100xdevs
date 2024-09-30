//                                  AUTHENTICATION
// Check notes for  crucial theoretical info of auth 
// To pass a header consisting token into a fetch request so that backend can authorise the user and then return the data
//const response= 

// Project:- LEt people signup to your website . Only allow signed in user to see all ppls names

// Basically we need to build an api similar to one used in fetching, but we want to restrict who can access this 
// So gotta buld a frontend page where the user will put the data and authentication will happen

// Two endpoints:   POST/signin : Takes username,pswd in body,returns jwt with username incrypted(provided user exists in inmemory database)
//                  GET/users : Takes autharisation header with jwt, returns all users names if auth succeeds, else error 413

// Since we are not using databases yet, theres a list of in memory users,saved in code memory only

const express=require("express")
const jwt=require("jsonwebtoken")        // Use "npm install jsonwebtoken express"
const app=express()
const jwtpswd="123456"      // This is usally stored in Backend server of websites, n is super private/protected
const port=3000

const ALL_USERS=[
    {
        user:"akshit@gmail.com",
        pswd:"28072004",
        username:"Akshit"
    },
    {
        user:"suryansh@gmail.com",
        pswd:"987654",
        username:"Suryansh"
    },
    {
        user:"vaibhav@gmail.com",
        pswd:"456789",
        username:"Vaibhav"
    }
]

function userexist(user,pswd){
    let flag=0;
    for (let i=0;i<(ALL_USERS.length);i++){
        if (ALL_USERS[i].user==user && ALL_USERS[i].pswd==pswd){
            flag=1;
        }   
    }
    if (flag==1){
        return 1;
    }
    else
        return 0;
}
app.use(express.json())
app.post("/signin",function(req,res){
    /*
    if (!userexist(req.body.user,req.body.pswd)){
        return res.status(403).json({       //works without return too
            msg:"Invalid token"
        })
    }
    
    //Another way
    */
    if (!(ALL_USERS.find(function(element){
        return element.user==req.body.user && element.pswd==req.body.pswd
    }))){
        return res.status(403).json({
            msg:"User doesnt exist in current db"
        })
    }
    
    let token=jwt.sign({username:(req.body.user)},jwtpswd)
    res.json({
        token
    })
})

app.get("/user",function(req,res){
    try{
        const token=req.headers.authorization;
        const decode=jwt.verify(token,jwtpswd);
        user=decode.user;
    }catch{
        res.status(403).send({
             msg:"Invalid token"
        })// THis will trigger in 3 cases , if auth header incorrect, if auth header not therre only, if jwtpswd is changed
    }
    res.json({
        users:ALL_USERS.filter(function(value){
            if (value.username==username)
                return false;
            else
                return true;
        })
    })
}) 

app.listen(port)
// THis much of code will be enough to authenticate. BUT        WE LACK DATABASE


//                                                          
