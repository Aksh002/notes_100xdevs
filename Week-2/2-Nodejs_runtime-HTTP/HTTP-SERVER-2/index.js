/*
const express = require('express')
const app=express()
const port=3000

app.get('/route-handler',function(req,res){
    res.json({
        n:'Akshit',
        age: 20
    })
})
app.get('/',function (req, res) {                           // This "function" runs whenever smone tries to hit ur backend server. 
    res.send('<b><h1>HELLO</h1></b>')                       // This is not JS/express writing HTML code, express here is just returning the string to the user/browser on passing request, the browser is the one who recognise this string that came back is HTML and execute it
  })
// .get helps user getting back the html for the user

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// The app.listen method is crucial in an Express.js application as it starts the server and makes it listen for incoming connections on a specified port. Without this line, your server will not start, and therefore it won't be able to handle any requests. The callback function provided to app.listen is optional

//                          .POST
// We can also send "post" requests
// In post request , ppl/user can actually send data along, we will see how we can send it through the browser itself later, for now we will use "postman"
//                          POSTMAN
// Hence download postman
// Postman provides the interface, to send requests just like a browser, you can also send req internally

//                          Handeling POST requests
// We can use this sending data feature of post request for authentication, we will se it here how:-

// Before this,pass a GET req on Postman with url :- "http://localhost:3000/", and add a header named "authentication" with value being 123123
app.post('/conversations',function(req,res){

    console.log(req.headers["authorization"])                   // this line basically takes headers frm the passed request(stored in req) and print out the Authentication value,this helps us to take the input that user is giving. We can perform token checks frm here too 
    console.log(req.body);                                      // By logic this should also print the body provided by user through request, but it prints undefined, this is because the body of the request has not been parsed. By default, Express does not parse the body of incoming requests. To parse different types of request bodies (like JSON or URL-encoded data), you need to use middleware.
    res.send({
        msg:'2+2=4'
    })
}) 

//                          Doubt session
// If i take the wifi ip of this machine and enter "<ip>:3000" on google of another machine under same wifi, i will get the output website on that other device 
// One of the header that the browser passes to the domain is referer. Basically vercel has single server/machine with a single public IP and multiple url points to this, so typing the IP only wont get u to the website bc it doesnt know which one to give it to u, as it depends onthe providded header
// A server can host multiple applicaations and multiple domains can point to the same server

//                          REQ.BODY
// Express handles post requests and header but not body
// We can use various library to fetch body, one we are using is "BODY-PARSER", install it first
//                          MIDDLEWARE
//                          BODY-PARSER
const express = require('express')
const bodyParser=require('body-parser');
const app=express()
const port=3000

// Middleware
app.use(bodyParser.json());               
//app.use(express.json());  can also be used

// Any time the body gas some JSON, bodyParser.JSON() will extract that JSON and put it in "body"  
app.get('/',function(req,res){
    console.log(req.body);
    // Now we can fetch body from the request
    let msg = req.body.msg;
    console.log(msg);
    console.log(req.headers["authorization"]);

    console.log(req.query.msg)                                  //QUERY PARAMETER  :- If the request frm postman is of the form "http://localhost:3000/?msg='query_parameter'", this line fetches the body like data provided by user through URL itself

    res.json({
        n:'Akshit',
        age: 20
    })
})
app.listen(port, function() {
    console.log(`Server is running on http://localhost:${port}`);
});
// app.listen means i am taking over this port

// To automatically restart the express server after saving the rechanges itself, type "npx nodemon index.js"
// Try to see n draw parallels with use of fs library and fs.readFiles fxn.Just like call back fxn inside .readFile has args err and data, here callback fxn in .get fxn has args req and res. In fs,.readFile, first arg is a string having route to the file(file name), in .get, first arg is route that is to be entered by the user in request to execute thst fxn
// Explaination 101: Bodyparser :- we can use body-parser, it enables us to parse incoming request bodies in a middleware.Express.js needs to know what type of data u r sending over the network, so it knows how to parse it. Thats why you need to pass app.use(express.json)
*/



//                              Enviroment variable
// If we set an enviroment variable in my terminal, or i enject env variable into the Process that has to be run(could be of any language) when we r starting them, we can access enviroment variable inside the process
// Way to do that in node is through "process.env.port"
// Set env variable by typing       "export PORT=3000" in BASH terminal
//                                  "$env:PORT=3000" in powershell terminal
const express = require('express')
const bodyParser=require('body-parser');
const app=express()
const port=process.env.PORT      //      ||      3000;
// Any port can have these 2 values. "process.env.port" is used to access enviroment variable
// this app is an obj though

app.use(bodyParser.json())

app.post('/',function(req,res){
    // Do wutever u want here , run a ML model or wutever
    res.send('Fck u');
    //res.send("Haaawwww");         // U can make 2 send calls
})

app.listen(port,function(){
    console.log(`Server is running on http://localhost:${port}`);
})
// this statement for HTTP server is like a call statement for a fxn