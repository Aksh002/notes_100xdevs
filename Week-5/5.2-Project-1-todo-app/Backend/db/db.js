const mongoose=require("mongoose")
const { boolean } = require("zod")
const types = require("../types")

mongoose.connect("mongodb+srv://akshitgangwar02:28072004%40Ksh@akshitmongo.lfnnsii.mongodb.net/todo_db")
// this networrk string should be stored in .env files for safety reasons, it should not be throwen out in public through code

const schema=new mongoose.Schema({
    title: String,
    description: String,
    done: {
        type :Boolean,
        default: false
    }
})

const todo=mongoose.model("todos",schema)

module.exports={
    todo
}