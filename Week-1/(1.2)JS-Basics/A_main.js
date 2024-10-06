/*
//              print
console.log("HEllo");


//              Variables 
let a=10
console.log(a)

let a=10
a=5
console.log(a)

const a=5
a=2
console.log(a)
//this will give error

var a=10
console.log(a)


let firstname="akshit";
let age=19;
let ismarried=false;
console.log("Tzhis guy is"+firstname+"and there age is " +age)


//              Conditionals- If-else
if (ismarried)
{
    console.log(firstname+"is married")
}
else
{
    console.log(firstname+"is not married")
}

 
//              loops
let ans=0;
for (i=0;i<=100;i++)
    {
        ans+=i;
    }
console.log(ans)


//              Arrays
const ages=[21,22,23,24,27,28]
const num=ages.length // thats a method to calculate length of array
for (let i=0;i<ages.length;i++)
    {
        if (ages[i]%2==0)
            {
                console.log(ages[i])
            }
    }



//              objects
const a={
    firstname:"akki",
    gender:"Male",
    age:19
}
console.log(a["firstname"])         //a.firstname
//              array of obj
const a=[
    {
        firstname:"Akki",
        gender:"Male",
        age:19
    },
    {
        firstname:"hello",
        gender:"female",
        age:21
    },
    {
        firstname:"nigga",
        gender:"Male",
        age:99
    }
]
for (let i=0;i<a.length;i++)
    {
        if (a[i]["gender"]=="Male")
            {
                console.log(a[i]["firstname"])
            }
    }


//              Function
function sum(a,b)
{
    return a+b;
}
const val=sum(1,10)
console.log(val)


//              Callback
// Passing a fxn as the argument for another fxn
function sum (num1,num2,fxntocall)
{
    let result =num1+num2;
    fxntocall(result);
}
function dispres(data)
{
    console.log("sum: "+data)
}
function passivedispres(data)
{
    console.log("Sum of num1 and num2 is :  "+data)
}
// now we have the dinamics to get the sum in either simple form or passive form by passing thr fxn which we wanna implement
sum(9,10,dispres)
// and
sum(9,10,passivedispres)
// setTimeout
function greet()
{
    console.log("Hello world")
}
function greetalien()
{
    console.log("Hello alien")
}
setTimeout(greet,1*1000)
// setTimeout is a prebuilt fxn that takes a fxn as an argument and run that fxn afte the time period that is passed as an argument
setInterval(greet,1*1000)


//              Class Assignments
// Counter from 30 to 0 using setInterval
let num=31;
function counter()
{
    if (num>=0)
        {
            console.log(num=num-1);
        }    
        
}
let intervalid=setInterval(counter,1*1000)

function stopinterval()
{
    clearInterval(intervalid)
    console.log("counter stopped")
}

setTimeout(stopinterval,32*1000)

// Calculate the time between a setTimeout call and the inner function actually runnung
let count=0;
let startTime = Date.now();

function main()
{
    count=count+1;
}
let intervalid=setInterval(main,1)

function stopinterval()
{
    clearInterval(intervalid)
    let endTime = Date.now();
    let elapsedTime = endTime - startTime;
    console.log("Time taken (in milliseconds): " + elapsedTime);
    console.log("Number of intervals executed: " + count);
}
setTimeout(stopinterval,1000)
*/

// Create a terminal clock(HH:MM:SS)
let t=Date.now();
let z=t-((54*365)+149)*24*60*60*1000;
let h=z/(1000*60*60)
let m=(z%(1000*60*60))/(1000*60)
let s=((z%(1000*60*60))%(1000*60))/1000
console.log(h+":"+m+":"+s)



//                                              "=>" instead of finction(){}
// 1. Arrow Function without Curly Braces (Implicit Return):--
//          When you don't use curly braces {}, the arrow function implicitly returns the result of the expression. This is often used for simple functions that have a single expression.
const sum = (a, b) => a + b;

//  2. Arrow Function with Curly Braces (Explicit Return)
//          When you use curly braces {}, you need to explicitly use the return keyword if you want to return something from the function. Otherwise, the function will return undefined by default.
const sum2 = (a, b) => {
    return a + b;
};

//                                              "=="        Vs      "==="
// In JavaScript, == and === are comparison operators, but they differ in how they compare values:

// 1. == (Loose Equality or Abstract Equality):-
//          Compares values after type coercion, meaning JavaScript tries to convert the values to the same type before comparing them.
//          If the two values being compared are of different types, JavaScript will try to coerce them into the same type and then compare them.

// 2. === (Strict Equality):-
//          Compares both value and type without doing any type conversion. Both the value and the type of the two values must be the same for === to return true.
//          If the types are different, === will immediately return false
