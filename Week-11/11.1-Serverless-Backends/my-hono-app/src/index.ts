import { Hono } from 'hono'

const app = new Hono()

app.post('/',async (c) => {                 // c = context (everything related to request)             
  // Both req,res are found in c .

  // Body:-
  const body=await c.req.json()
  console.log(body)

  // Header:-
  console.log(c.req.header())
  console.log(c.req.header("Authorization"))

  // Querry param:-
  console.log(c.req.query("param"))

  // Return ways:-

  //return c.text('Hello Hono!')

  return c.json({
    msg:"JSON Return"
  })
})


//                                                    Middlewares

// Writing a simple auth middleware
async function authMiddle(c:any,next:any){
  if (c.req.header('Authorization')){
    await next();                       // Call is awaited, for, just in case we have another logic to run after next()
  }else{
    return c.text("You do not have excess");
  }
}



export default app
