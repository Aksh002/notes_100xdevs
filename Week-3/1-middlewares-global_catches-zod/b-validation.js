/*

const express=require("express")
const app=express()
const port=3000

app.use(express.json())

app.post("/health-checkup",function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys
    const kidneycount=kidneys.length

    res.semd("You have" + kidneycount + "kidneys")

})

app.listen(port)


//                                                  Global catches
// It is just another middleware that we put at the end of deriving all the routes, if theres an error in above roots , in that case it is called, thats why its at bottom contrary to app.use(express.json())
// Whenever an wxception is raised, it reaches the end .use() which take a middleware hving 4 args, such middle wares are called error handling middlewares
app.use(function(err,req,res,next){
    errorCount++;
    res.json({
        msg:"Sorry smthing is up with our server"
    })
}) 
// Purpose of next is when we chain multiple error handling middlewares


//                                                  ZOD
// We expect body like "{"Kidneys":[1,2]}" ,if the user send some other random data or data of different type, its our responsibility to do input validation and prevent our server from crashing 
// If we do input validation by applying if-else statements, we hv to check if kidney is there or not, its a json or not, its a number or an array, to do soo many checks for each request, its not a gud practice and not quite scalable as we may expect sm complicated input for authentication
// To simplify this we have a library called ZOD, an input validation libraries
// Check ZOD website for all the avialable commands for checks 

const express=require("express")
const app = express()
const port=3000

const zod= require("zod")

const schema=zod.array(zod.number())

app.use(express.json())
app.post("/health-checkup",function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys
    const response=schema.safeParse(kidneys)
    res.json({
        response
    })  // This will return to a dictionary of the discription of the error occured, in clean,confined n detailed manner 
})
app.listen(port)
*/
// Eg- If we do not provide body on sending the request, we will get this 
    /*
    {
        "response": {
            "success": false,
            "error": {
                "issues": [
                    {
                        "code": "invalid_type",
                        "expected": "array",
                        "received": "undefined",
                        "path": [],
                        "message": "Required"
                    }
                ],
                "name": "ZodError"
            }
        }
    }
    */

/*
// We can make pop-ups for such errors using info frm zod 
app.post("/health-checkup2",function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys
    const response=schema.safeParse(kidneys)
    if (!response.success){
        res.status(411).json({
            msg:"Input is invalid"
        })
    }
    else{
        res.json({response})
    }

})
*/

// What if we expect 3 inputs frm the user:-
/*
    email : string => should look like email
    password : atleast 8 lettres
    country : "IN","US"
*/
/*
const express=require("express")
const app = express()
const port=3000

const zod= require("zod")

const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
    country:zod.literal("IN").or(zod.literal("US"))
})

app.use(express.json())
app.post("/login",function(req,res){
    //kidneys=[1,2]
    const data=req.body.data
    const response=schema.safeParse(data)
    if (!response.success){
        res.status(411).json({
            msg:"Input is invalid, issue:"+response.error.issues[0].code
        })
        return;
    }
    else{
        res.json({
            msg:"Logged in succesfully"
        })
    }
}) 
app.listen(port)


//                              Coercion of premitives
// Its meaning is to push ZOD to to bend according to will, and be a litle more convenient and considerate.
// Eg:- ZOD will give success:False for zod.string() if we pass |12| or |true|, but we know these can be converted to string.
/*
const schema2=zod.coerce.string()
schema.parse("tuna")    // => "tuna"
schema.parse(12)        // => "12"
schema.parse(true)      // => "true"
*/

// Why we use "()" in app.use(express.json())?
// Bcs when someone wrote json fxn middleware, he wrote it like this
function json(){
    return function(req,res,next){
        // Logic to convert body of request into json
    }
}
app.use(express.json())// Thats why we need to call the fxn here
// app.use() put that cb fxn in all the request at first slot
