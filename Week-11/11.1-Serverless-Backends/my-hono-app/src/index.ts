import { Hono } from 'hono'

const app = new Hono()

app.post('/',async (c) => {                 // Both req,res are found in c

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

export default app
