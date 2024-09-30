//                              NODE.js

// What can we do with node.js-
//                          1-Create CLIs(command line interfaces)
//                          2-Create a video player
//                          3-Create a game
//                     (IMP)4-Create an HTTP server

//                              HTTP

// Note - Go to network section to see a client making a request to the server and slso to locate authorisation cookie

// Note - See theory in notes

//                              Making HTTP servers
// we use EXPRESS Library for this

//  STEP-1 --  RUn "npm init -y" in terminal, a file names-d "package.json" will be created             . It initialises "Node Package Manager"
//  STEP-2 -- Run "npm install express" on terminal to install Express library. U can import "fs" library directly,its built in node.js, but to import express library to the file u gotta bring express from the internet to ur machine, which is done using this command
//  STEP-3 -- Search "Express hello world" on google and copy the syntax and adjust them a little
const express = require('express')                          // to import the library to the file just like we did with fs to read file
const app = express()                                       // its not a constructor call for a class, its a function that initialises an instance of express,the app object, not like class wala obj exactly, but htrough it we does call sm fxns
const port = 3000                                           // it 

app.get('/',function (req, res) {                           // This "function" runs whenever smone tries to hit ur backend server. 
  res.send('Hello World!')
})
// THis fxn basically makes sure whenever "/" is passed in the route, "Hello World getss returned". So it can be called a route handler

app.listen(port,function () {
  console.log(`Example app listening on port ${port}`)
})
// After running this code make sure to go to "localhost:3000" on chrome to see the result
// THis is a base level HTTP server in express nodejs

// To implement this, we need to learn how to write application specific logic

//                  Doubt session notes :-
// Whoever wrote node js, he was im going to write an interrpreter for js,along with that im gonna include sm libraries like http n express to perform backend fxns
// Db calls are asynchronus,nodejs can accepts multiple requests same time bcs of this,despite js being single threaded
// To escape out of running HTTP call in the terminal use CTRL + C








// NOTE : TO get smones machine's IPadress, type "ipconfig" in there terminal
