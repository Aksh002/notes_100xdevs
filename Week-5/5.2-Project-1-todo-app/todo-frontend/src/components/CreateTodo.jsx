import { useState } from "react"

// Always name jsx file with Capital first letter
export function CreateTodo(){
    // export keyword is used to export this fxn duhhh

    // Un-optimal way to pass the inputed title and descrtiption through fetch call to submit the todo
    // We will create local state variable here only, in the child component
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    return <div>
        <input style={
            {
                padding:10,
                margin:10
            }
        } onChange={
            function(e){
                const value=e.target.value
                setTitle(value)
            }
        } type="text" placeholder="Title" /> <br />
        <input style={
            {
                padding:10,
                margin:10
            }
        } onChange={
            function(e){
                const value=e.target.value
                setDescription(value)
            }
        } type="text" placeholder="Description" /> <br />

        <button style={
            {
                padding:10,
                margin:10
            }
        } onClick={
            function(){
                fetch("http://localhost:3000/todos",{
                    method: "POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(async function (res) {
                    const json=await res.json()
                    alert("Todo added")
                })
            }
        }>Add a Todo</button>
    </div>
}
