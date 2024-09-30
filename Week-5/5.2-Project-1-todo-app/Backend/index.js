const express=require("express")
const app=express()
const zod=require("zod")
const { creatTodo,updateTodo }=require("./types")         // THis way is called object destructuring
app.use(express.json())
const { todo }=require("./db/db")
const cors=require("cors")
app.use(cors({
    origin:"http://localhost:5173"              // This way, only the frontEnd specified will be able to hit this backend, not by all frontEnd
}))

app.post("/todos",async function(req,res){
    const response=creatTodo.safeParse(req.body)
    if (!response.success){
        res.status(411).send({
            msg:"Wrong inputs"
        })
        return;
    }
    const title=req.body.title
    const description=req.body.description
    //const done=req.body.done

    await todo.create({
        title:title,
        description:description
    })

    res.send({
        msg: "todo created successfully"
    })

})

app.get("/todos",async function(req,res){
    const todos= await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const response=updateTodo.safeParse(req.body)
    if (!response.success){
        res.status(411).send({
            msg:"Wrong inputs"
        })
        return;
    }
    const id=req.body.id
    const update=await todo.updateOne({
        _id:id 
    },{
        done:true
    })
    res.send({
        msg:"completed"
    })
})

app.listen(3000)