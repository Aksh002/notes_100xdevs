//                                                              DATABASES
//  See notes 
//                                                              MONGO DB
//  We use MONGOOSE library to connect mongo db to server

//  Project is mostly same as the one in b-auth.js
//  extra stuff is , Create a post request for route "/signup" where user could send user,username,pswd providedt that user doesnt exist alr  

/*
// Lets create a prototype to learn
const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://akshitgangwar02:28072004%40Ksh@akshitmongo.lfnnsii.mongodb.net/user_appnew")

const User=mongoose.model("Users",{name:String,email:String,password:String});
// Creates a mould for a table named Users

// Entering the the data in that moulded table
const user=new User({
    name:"Akshit Gangwar",
    email:"akshi@gmail.com",
    password:"28072004"
});
user.save()
*/
// THis will put this data in the table names USers inside user_appnew

// NOw its time to work on project
// usually how signup goes is user enter the email, then a verification mail with otp goes, then he will click on that to authenticate, we cant doo that yet so lets skip that part
// Another thing to remember is u need to check if the user alr exist in the db or not, if it does send a status code with a msg back, we can do that rn

const express=require("express")
const app=express()
const port=3001
const jwt=require("jsonwebtoken")
const jwtpswd=123456

app.use(express.json())
app.post("/signup",async function(req,res){

    const username=req.body.username
    const email=req.body.email
    const password=req.body.password

    const mongoose=require("mongoose")
    mongoose.connect("mongodb+srv://akshitgangwar02:28072004%40Ksh@akshitmongo.lfnnsii.mongodb.net/user_appnew")

    const User=mongoose.model("Users",{name:String,email:String,password:String});

    const userexisting=await User.findOne({email:email})
    // User.update(),User.delete(),User.create()
    // CRUD => Create , Read , Update , Delete   
    if (userexisting){
        res.status(403).send({
            msg:"User already exist with this email"
        })
    }
    const user=new User({
        name:username,
        email:email,
        password:password
    });
    // await USer.create({name:username,email:email,password:password})
    user.save()
    res.json({
        msg:"You have been registered"
    })
})
app.listen(port)

/*

// THis is how u implement Regex and Or in mongoose
const filter=req.params.filter  || ""

    const user=User.find({
        $or:[{
            firstname:{
                "$regex":filter
            }
        },{
            lastname:{
                "$regex":filter
            }
        }]
    }) */