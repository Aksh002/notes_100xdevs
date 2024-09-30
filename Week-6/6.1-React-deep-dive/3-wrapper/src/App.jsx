//                                                        WRAPPER COMPONENT

import { useEffect, useState } from 'react'

import './App.css'
/*
function App() {

  return (
    <>
      <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
    </>
  )
}
// Instead of passing {title} as props, we are sending another component as prop

function TextComponent(){
  return <div>
    Hi there
  </div>
}

function CardWrapper({innerComponent}){
  // Creating a div which has a border 
  // And inside the div, renders the props
  return <div style={
    {
      border:"2px solid black"
    }
  }>
    {innerComponent}
  </div>
}


//We Usually do not use this syntax for wrapping, common trend is:
function App(){
  return <div>
    <CardWrapper>
      Hi there
    </CardWrapper>

    <CardWrapper>
      Hello there <br />
      <button>HEloooo</button> <br />
      <div>WTF</div>
    </CardWrapper>

    <CardWrapper>
      <CardWrapper>
        Nested use case
      </CardWrapper>
    </CardWrapper>
  </div>
}
// Now this will work like a wrapper in which we can enclose anyhting in place of hi there,any div,or multiple divs and it will enclose them inside a box of this style

function CardWrapper({children}){
  return <div style={
    {
      border:"2px solid black",
      padding:10
    }
  }>
    {children}
  </div>
}
*/
//                                                                        useEffect() Hook
// Now we are doing an assignment where we have to make a frontend to display all the todos as we are hitting "http://localhost:3000/todos" Backend and recieving varied number of em


function App(){
  const [todos,setTodos]=useState([])
  return <div>
    <Style>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </Style>
  </div>
}

function Todos({todos,setTodos}){
  // you can absolutely use React hook functions, like useState and useEffect, inside any functional component, not just the App() component. Hooks are designed to work at the component level, so as long as you follow the rules of hooks (e.g., calling them only at the top level of your component and not inside loops or conditionals), you can use them in any component
  useEffect(function(){
    setInterval(function(){
      fetch("http://localhost:3000/todos")
      .then(async function(response){
        const json= await response.json()
        //const data=json.todos
        setTodos(json.todos)
    })
    },10000)
    },[])
    return <div>
      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
      })}
      </div>

  
}

function Todo({title,description}){
  return <div>
    <h2>
      {title}
    </h2> <br />
    <h4>
      {description}
    </h4>
  </div>
}

function Style({children}){
  return <div style={
    {
      backgroundColor: '#fff',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
    }
  }>
    {children}
  </div>
}
export default App

// Above one can also be written like this :-
// Much optimal as state is pushed down to the most common ancestor
/*
function App(){
  
  return <div>
    <Style>
      <Todos></Todos>
    </Style>
  </div>
}

function Todos(){
  // you can absolutely use React hook functions, like useState and useEffect, inside any functional component, not just the App() component. Hooks are designed to work at the component level, so as long as you follow the rules of hooks (e.g., calling them only at the top level of your component and not inside loops or conditionals), you can use them in any component
  const [todos,setTodos]=useState([])
  useEffect(function(){
    setInterval(function(){
      fetch("http://localhost:3000/todos")
      .then(async function(response){
        const json= await response.json()
        //const data=json.todos
        setTodos(json.todos)
    })
    },10000)
    },[])
    return <div>
      {todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
      })}
      </div>

  
}

function Todo({title,description}){
  return <div>
    <h2>
      {title}
    </h2> <br />
    <h4>
      {description}
    </h4>
  </div>
}

function Style({children}){
  return <div style={
    {
      backgroundColor: '#fff',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
    }
  }>
    {children}
  </div>
}
*/


//  NOTE:- ONe thing you may observe that frontend do not refreshes just once on reloading the website, it refreshes twice, its because <Strictmode> is applied in "./main.jsx", if you remove that, it will render once only