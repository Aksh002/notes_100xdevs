// Constraints for our route:-
//      1- user needs to send a kidneyid as a query param,which should be a number as 1 or 2(2 hi kidney hoti hai)
//      2- user should send a username and password in header

/*
// Lets write the code for it without using middlewares
const express=require("express")
const app=express()
const port=3000

app.get("/health-checkup",function(req,res){

    //collecting data
    const username=req.headers.username
    const pswd=req.headers.password
    const kidneyid=req.query.kidneyid

    //authentication
    if (username!="Akshit" || pswd!="28072004"
        //(!(username=="Akshit" && pswd=="28072004")) can be used too
    ){
        res.status(403).json({
            msg:"User doesnt exist"
        })
        return;             // this is called early returning, this will make surecontrol do not go forwrd
    }
    if (kidneyid!=1 && kidneyid!=2){
        res.status(411).json({
            msg:"Invalid number of kidneys"
        })
        return;
    }

    // DO something here

    res.send("Your heart is healthy")
})

app.listen(port)

// What if we hv to introduce an another route regarding kidney replacement through PUT request, we will have to check the authentiation there too
// A website ususally has more then 20 routes , if we have to repeat the same code for authentication inside evey route request , it would be highly redundent

// A natural solutuion to this could be making a function out of authentication, but hte code will still be quite long and redundent

// The best and optimised way is to move authorisation to some other place,to move it to that other place we use middlewares

// NOTE :- While passing http request we can pass not just 1 but a range of callback fxns, middleware utilises this property  to pass authentication fxn as an argument for httb request

// When the request is executed,, controle reaches to all the callback fxns one by one in serial order, and only moves to next fxn if "next()" call is passed to the runnig fxn
*/
const express=require("express")
const app=express()
const port=3000

function usermiddleware(req,res,next){
    const username=req.headers.username
    const pswd=req.headers.password

    if (username!="Akshit" || pswd!=28072004){
        res.json({
            msg:"Wrong username or password"
        })
        return;
    }
    else
        next()
}

function kidneymiddleware(req,res,next){
    const kidneyid=req.query.kidneyid
    if (kidneyid!=1 && kidneyid!=2){
        res.json({
            msg:"Wrong kidney inputs"
        })
    }
    else
        next()
}

app.get("/health-checkup",usermiddleware,kidneymiddleware,function(req,res){
    res.json("Its working")
})

app.get("/kidney-checkup",usermiddleware,kidneymiddleware,function(req,res){

})

app.get("/heart-checkup",usermiddleware,function(req,res){
    
})

app.post("/",usermiddleware,kidneymiddleware,function(req,res){
    
})

//rate limitter is also part of middlewares
function ratelimitter(){
    // Write logic to limit the no. of reqests per sec to 5 frm single user  
}   // then pass this fxn as callback fxn in the requests

// Like we can also hv a middleware whose sole purpose is to count the the number of requests
const requestcount=0
function calculateRequest(req,res,next){
    requestcount++;
    next()
}   // NOw u can pass this fxn as callback in all requests to count how many requests are hitting our server


app.listen(port)


//                                      app.use()
// to catch the body of the http request in post-request handler
// This "use" means whatever middleware is inside () is going to called evrywhere
// Whatever requests comes after this line will have this middleware automatically passed
app.use(calculateRequest)

app.post("/health-checkup",function(req,res){

})

// app.use(express.json())      -       We r passing () here bcs express.json() itself return a fxn

// The reason we need middlewares to collect data from body but not headers, query is becase its not defined what type the data in body is of. We pass express.json() as we tell them that we expect data in json form 


// To add smthing in request headers using code only os that it can be used in other milddlewares
req.user="asaads" 



// To create a middleware in Express that handles errors and returns an error message for any errors that occur in your application
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace (optional)
    res.status(err.status || 500).json({
        error: {
            message: err.message || "An unexpected error occurred"
        }
    });
});
 