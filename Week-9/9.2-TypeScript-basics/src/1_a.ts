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

function 



