const zod=require("zod")

/*
// Input is gonn a be of 2 types
{
    title: Stroing,
    description: String
}


{
    id: String                  // to give the id of the todo to be marked comleted
}

*/
const creatTodo=zod.object({
    title:zod.string().min(1),
    description:zod.string().min(1)
})

const updateTodo=zod.object({
    id:zod.string()
})

module.exports={
    creatTodo:creatTodo,
    updateTodo:updateTodo
}