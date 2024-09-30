/*
//                              Sync fxn
function findsum(n)
{
    let ans=0
    for (let i=0;i<n;i++)
        {
            ans+=i;
        }
}
console.log(findsum(1000))

//                              Async fxn
//              setTimeout()
// provided by js globally 

function findsum(n)
{
    let ans=0
    for (let i=0;i<n;i++)
        {
            ans+=i;
        }
    console.log(ans)
}

function runtill100()
{
    findsum(100)
}

setTimeout(runtill100,1000)
console.log("Hello there")
// Here setTimeout will run retuntill100 fxn after 1 sec, but it wont hold off the JS single thread there only for that 1 sec,JS thread will run rest of the code in that time


//              readFile()
const fs = require("fs");
//filesystem module

fs.readFile("a.txt","utf-8",function (err,data)
{
    if (err) 
        {
            console.error(err); // Handle errors
        } 
        else 
        {
            console.log(data);
        }
})
console.log("Hi there 2");
// "Hi there" is printed before "Hi there 2" bcs of asynchronus nature

//
const fs=require("fs")
fs.readFile("a.txt","utf-8",function(err,data)
{
    console.log(data)
})
console.log("HI there 2")

for (let i=0;i<1000000;i++)
    {

    }
console.log("Hi there 3")
// This shows that if the JS thread moved on from asynchronus fxn towards the rest of the code, it will go back to that asynchronus fxn when the control/thread becomes idel, i.e when all rest finished running, even when reading of file is done,control comes over it at last

const fs=require("fs")
// importing file system library
fs.readFile("a.txt","utf-8",function(err,data)
{
    console.log(data)
})
console.log("HI there 2")

setTimeout(function(){
    console.log("Ho there 3")
},1000)
console.log("Hi there 4")
// this will demonstrate that what happens when 2 async fxns r used together, one used first runs first
// TO get visual fxnality of async fxn go to "http://latentflip.com/loupe" and run code there


// Actual use of callback is for async fxn actually

//                              Promises
// Writing our own async fxns(they r basically a syntactical wrapper on pre-existing ones)
// Async fxn without Promises/ Ugly way
const fs=require("fs");
function akkireadfiles(cb)
{
    fs.readFile("a.txt","utf-8",function(err,data)
    {
        cb(data);
    })
}
function ondone(data)
{
    console.log(data);
}

akkireadfiles(ondone);

// Async fxn with promises / Pretty way
const fs=require("fs");
const { promise } = require("zod");

// My own async fxn
function akkireadfiles()
{
    console.log("Inside akkireadfiles")
    return new Promise(function(resolve)    //Promise() is basically a constructor call make a new obj of that class and returning it       //Check notes for detailed explainatin
    {
        console.log("INside Promise")
        fs.readFile("a.txt","utf-8",function(err,data)
        {
            console.log("Before resolve")
            resolve(data);
        })
    })
}
function ondone(data)
{
    console.log("Before printing data");
    console.log(data);
}

var a=akkireadfiles()
//console.log(a)    //THis will give "Promise { <pending> }"
a.then(ondone);
// Basically what Promise does is it takes a function (with resolve as its argument) as an argument. Inside the fxn, determine when to resolve the promise, as soon as the promises resolves,(.then()) gets trigered and resolved data is transfered into the fxn present inside .then().
// Return of the promise returns synchronusly but it does not synchronusly returns this data, data of the promise comes asynchronusly.WebApi/simmy tells the thread to  put .then() on promise/(return call for promise i.e a) so that it knows where to put in the data(here it is put in ondone fxn)  


// Fuctionality of Promise class    //  Promises states - pending|resolved|rejected
var d = new Promise(function(resolve)
{
    console.log("HI 1")
    setTimeout(function()           // Place for the writer of the async fxn to do their magic(get ketchup) and call resolve at the end with the data
    {
        console.log("HI 2")
        resolve("OOOLAAAA")
    },10000);
})
function ondone()
{
    console.log(d);     //this where timmy decides what to do with ketchup
}
console.log(d)
d.then(ondone)      // .then() gets called whenever the async fxn resolves

// we will get "Promise {<pending>} \n promise {"HI 2"} \n Promise {"OOOLAAA"}" as output bcs promise will resolve with a delay
//  THread control = reads var d - 

// NOTE - Webapi works over c++ and can run multiple async fxn together
// NOTE - Nested setTimeout fxn is an example of Callback_HEll
// NOTE - .then() is basically a method of class Promise() in bigger picture


//                              Async await

// Usually used on the caller side,not on the side where u define promisified fxn. The person who is calling a promisified fxn need to hv its main fxn be labled as async,any fxn who wanna use await needs to hv async in the declaration
// Rather then using the .then() , we add await before fxn call of promisified fxn and get the value in the variable
//its basically a way to extract the resolve out of a promisified fxn
// We cant await a promisified fxn without wrapping it inside an async fxn, else it will give "await is only valid inside the async fxn and the top level bodies at module" 
function akshitfxn(){
    return new Promise(function(resolve){
        console.log("1");
        resolve("HI there");
    })
}

async function main(){
    console.log("2");
    const value= await akshitfxn();
    console.log(value)
}

main()
*/
// Below code shows that how thread controls goes in the async await 
//Basically if any fxn returns a promise we will just add await in front of the fxn call to tell the js ot wait for the promise to be resolved, which it does after 4sec here, then log the values and the later code
function akshitfxn(){
    return new Promise(function(resolve){
        console.log("1");
        setTimeout(function(){
            resolve("HI there")}
            ,4000);
        console.log("2")
    })
}

async function main(){
    console.log("3");
    const value= akshitfxn();
    console.log("4")
    console.log(value)
    console.log("5")
}

main()