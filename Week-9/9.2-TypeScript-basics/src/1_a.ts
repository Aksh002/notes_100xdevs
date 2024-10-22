/*
//  Assigning type to a variable explicitly
const x:number=1;       
console.log(x)

// Giving type to arguments of a fxn
function greet(firstname:string){                  // U cant have a variable implicitly "any" type, although u do can explicitly declare it "any" type, but the key step is to explicitly provide a type
    console.log("Hello "+firstname);
}
greet("Akshit");
// U can ctrl+Hover over fxn call to see what args with types it expects ans what it returns

// Assign a Return type to a fxn
function sum(x:number,y:number):number{             // Explicitly saying this fxn will return number            //  TYPE INFERENCE:- Even if we do not explicitly assigns type, ts will infer the type on the basis of input and other variables used, and show the number signature here
    return x+y;
}
const val=sum(1,2)
console.log(val)

// Assigning type to a fxn
// Passing a fxn to a fxn and running it after a sec
function runAfter1(fxn  : () => void  ){                // Fxn type: expexts no args,return void(nothing)
    setTimeout(fxn,1000)
}
runAfter1(()=>{
    console.log("Running inner fxn")
})

//                                                      Interfaces
interface User{
    firstName:string,
    lastname:string,
    age:number,
    email?:string                           // "?" specifies that this feild is optional
}

function isLegal(user:User):boolean{
    if (user.age>=18){
        return true;
    }
    else{
        return false;
    }
}

function greet2(user:User){
    console.log("Hi there"+user.firstName)
}

isLegal({
    firstName:"Akshit",
    lastname:"Gangwar",
    age:20
})


// Assigning types in react
//              >> ts-in-react

// Implementing interfaces :-

// Just like java

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
*/



//                                                                  TYPES

type User={
    firstname: string,
    lastname: string,
    done: boolean
}

function isLegal(user: User){

}

// Extra features:-
//      Union:-
type numOrString = number | string

function test(value: numOrString){

}
test(1)
test("1") // Both will be valid

//      Intersection

type emp={
    name: string,
    id: number,
    role: string
}

type manager={
    name: string,
    id: number,
    start: Date,
    numofdeps: number
}

type TeamLead= emp & manager

const teamlead:TeamLead={
    name:"Akshit",
    id:23434,
    start: new Date(),
    role: "Software dev",
    numofdeps: 12
}



//                                                                      Arrays in TS
type numArray=number[]

function maxValue(arr:numArray){
    let max=0;
    for (let i=0;i<arr.length;i++){
        if (arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

// Another way:-
interface User2{
    firstName: string,
    lastName: string,
    age: number
}

function filterUsers(user:User[]){
    let max=0;
    for (let i=0;i<user.length;i++){
        console.log("Name"+user[i].firstname)
    }
}



//                                                                          ENUM
// Good for readability
enum Direction{
    Up,     //==0
    Down,   //==1
    Left,   //==2
    Right   //==3
}

function dosmthing(input:Direction){
    if (input==Direction.Down){

    }
}

dosmthing(Direction.Left)
dosmthing(Direction.Down)
console.log(Direction.Right)        // 3

//type Direction2= "Up" | "Down" | "Left" | "Right"                     // Less clean way to write

enum DirectionWithString{
    Up="Up",
    Down="Down",
    Left="Left"
}
console.log(DirectionWithString.Down) // Down

// Major useCase
// Makes throwing status code structured

enum ResponseStatus{
    success=200,
    notFound=404,
    wrongInputs=411,
    error=500    
}

app.get("/",(req,res)=>{
    if (!req.query.userId){
        res.status(ResponseStatus.notFound).json({})
    }
    else{
        res.status(ResponseStatus.success).json({})
    }
})

app.get("/123",(req,res)=>{
    if (!req.query.userId){
        res.status(ResponseStatus.notFound).json({})
    }
    else{
        res.status(ResponseStatus.error).json({})
    }
})
// Even if i wanna change status code for a perticular action, i dont have to do it manually for each position, i can just od it in enum





//                                                                  GENERICS
// Task:- Define a fxn that takes an array of either strings or number
// Normal way:-
type arr= number | string

function dosmthing2(input:arr[]){
    return input[0];
}

const value=dosmthing2(["akshit","gangwar"])
console.log(value.toUpperCase())// This will show red line , error 
// Key issue arrise here is since type of input is assigned to arr[], return type will be same, and arr represents both number and string, so it cant really distinguish which one the input is , thats why fxns specialised to string (like .toUpperCase()) do not not work
// Another issue is that input of mixed type is allowed too, which should not be

// Using Generics:-
function dosmthing3 <T> (input:T[]){
    return input[0];
}

const value2=dosmthing3<string>(["akshit","gangwar"])
const value3=dosmthing3(["akshit",1])                   // If type of that value not specified, then we can pass mixed types 
console.log(value2.toUpperCase())

function identity <T>(args:T){
    return args
}
const op1=identity<string>("Akshit")
const op2=identity("Gangwar")               // Ts can automatically infer actually
const op3=identity<number>(1234)
const op4=identity(true)

interface User3{
    name : string
}

const op5=identity<User>({ name :"akshit"})                   // It can be of non-premitive type also

