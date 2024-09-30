import { useState } from 'react'
import React from 'react'

//import './App.css'

let counter = 4;
function App() {
  const [todos , setTodos] = useState([{
    id:1,
    title:"go to gym",
    description:"workout karnaa hai bhai"
  },{
    id:2,
    title:"go to class",
    description:"padai karnaa hai bhai"
  },{
    id:3,
    title:"go to gf",
    description:"kiss karnaa hai bhai"
  }])

  // We need to provide each element of array a "key", to uniquely identify each child
  // We can pass index with todo in fxn and set key as index
  // But Preferably we should add keys in our own data
  return (
    <>
    <button onClick={addTodo}>Add a todo</button>
    {todos.map(function(todo){
      return <Todos key={todo.id} title={todo.title} description={todo.description}></Todos>
    })}
    </>
  )
  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description: Math.random()
    }])
  
  }
}

function Todos({title,description}){
  return <div>
    <h1>
      {title}
    </h1>

    <h5>
      {description}
    </h5>
  </div>

}
export default App
