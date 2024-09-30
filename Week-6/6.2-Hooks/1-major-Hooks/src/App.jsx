import { useMemo, useState,memo, useCallback } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

/*
//                                                        useEffect()
function App(){
  
  return <div>
    <Style>
      <Todos></Todos>
    </Style>
  </div>
}
// THis is the most optimal way , we have pushed down the state variable to the most common acestor
function Todos(){

  const [todos,setTodos]=useState([])

  useEffect(function(){
    axios.get("http://localhost:3000/todos")      // We are using axios lib here to make a call to BE, its syntax is much cleaner
    .then(function(response){
      setTodos(response.data.todos)               // We hvto make one less await call this way, axios is lil smart to convert it to json and store in data
    })
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


//                                    useEffect() - Assignment
function App(){
  return <div>
    <Style>
      <Input></Input>
    </Style>
  </div>
}

function Input(){
  const [id,setId]=useState(1)
  
  return <div>
    <input placeholder='id' type="text" onChange={
      function(e){
        const value=e.target.value
        setId(value)
      }
    } />
    <Temp id={id}></Temp>
  </div>
}

function Temp({id}){
  const [todo,setTodo]=useState({})
  useEffect(function(){
    if (id!=="" && id<6){
      axios.get(`http://localhost:3000/todo?id=${id}`)        // THis is the proper way to pass variable in a link
      .then(function(response){
      setTodo(response.data.todo)
      })
    }
  },[id])                                                     // We pass id here bcs it tells Hook to keep tab on id, as soon as id  changes, provided fxn is trigered
  return <div>
    <Todo title={todo.title} description={todo.description}></Todo>
  </div>
}

function Todo({title,description}){
  
  return <div>
    <h1>
      {title}
    </h1>
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

//                                      useEffect - Assignment-2
// Objective:- instead of writting id for input, uder clicks on given buttons to print respective ids

function App(){

  return <div>
    <Style>
      <But></But>
    </Style>
  </div>
}

function But({todo,setTodo}){
  const [id,setId]=useState(1)
  return <div>
    <button onClick={
      function(){
        setId(1)
      }
    }>1</button>
    <button onClick={
      function(){
        setId(2)
      }
    }>2</button>
    <button onClick={
      function(){
        setId(3)
      }
    }>3</button>
    <button onClick={
      function(){
        setId(4)
      }
    }>4</button>
    <button onClick={
      function(){
        setId(5)
      }
    }>5</button>
    <Temp id={id}></Temp>
  </div>
}
function Temp({id}){
  const [todo,setTodo]=useState({})
  useEffect(function(){
    if (id!=="" && id<6){
      axios.get(`http://localhost:3000/todo?id=${id}`)        // THis is the proper way to pass variable in a link
      .then(function(response){
      setTodo(response.data.todo)
      })
    }
  },[id])
  return <div>
    <Todo title={todo.title} description={todo.description}></Todo>
  </div>
}

function Todo({title,description}){
  
  return <div>
    <h1>
      {title}
    </h1>
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


//                                                                  useMemo() Hook
// Objective:- Create an app who takes a number as input, and display the sum of all the numbers till that number, and also has a button named counter that increment the counter value that is displayed on it by 1
// Restriction:- Write all the logic in single component
function App(){
  return <div>
    <Memo></Memo>
  </div>
}

function Memo(){
  const [num,setNum]=useState(0)
  const [count,setCount]=useState(0)

  let sum=0
  for(let i=0;i<=num;i++){
    sum=sum+i
  }

  return <div>
    <input type="text" placeholder='num' onChange={
      function(e){
        const n=e.target.value
        setNum(n)
      }
    } /> <br />

    <div>
    {sum}
      </div>
    <br />
    <button onClick={
      function(){
        setCount(count+1)
      }
    }>Counter+{count}</button>
  </div>  
}


// Given the restrictions, this mwthod is flawed because whenever user clicks on button, whole App gets re rendered, partss like input and output-displaying-div are not even changing but gets re-rendered,that heavy for loop gets re-run, that is redundent
// One solution could be putting for loop in useEffect() and declaring another state variable named finalValue, and make the useEffect to keep tab on thaqt variable
// Cant we just remember the value from the last render(doing memoisation of it) and display it, without running that heavy for loop again
// we use useMemo to do this
function App(){
  return <div>
    <Memo></Memo>
  </div>
}

function Memo(){
  const [num,setNum]=useState(0)
  const [count,setCount]=useState(0)
  //const [ans,setAns]=useState(0)            // If we going for useEffect approach

  let sum=useMemo(function(){
    let sm=0
    for(let i=0;i<=num;i++){
      sm=sm+i
    }
    return sm
  },[num])
  
  // useEffect(()=>{
  //   let sm=0
  //   for(let i=0;i<=num;i++){
  //     sm=sm+i
  //   }
  //   setAns(sm)
  // },[num])

  return <div>
    <input type="text" placeholder='num' onChange={
      function(e){
        const n=e.target.value
        setNum(n)
      }
    } /> <br />

    <div>
    {sum}
      </div>
    <br />
    <button onClick={
      function(){
        setCount(count+1)
      }
    }>Counter+{count}</button>
  </div>  
}


//                                                                useCallback() hook
function App(){
  const [counter,setCounter]=useState(0)

  function a(){
    console.log("High from a")
  }


  return <div>
    <button onClick={
      function(){
        setCounter(counter+1)
      }
    }>Count {counter}</button>
    <Demo a={a}></Demo>
    
  </div>
}

const Demo=memo(function x({a}){
  console.log("render")
  return <div>
    Hi there {a}
  </div>
})
// Even this fxn is a memo, its gonna get re-rendered agin and again if we press count, thats because of function a(), in every re render a() gets a seperate reference in memory which doesnt match the ref of a() in prev render, so react detects change, and if u pass a changing variable to memo, its ofc gonna get re-rendered
// you will see in the console section, render printing again and again, which shows that memo component is rendering continuously

// NOw we apply useCallback to tackle this re-rendering
function App(){
  const [counter,setCounter]=useState(0)

  const a=useCallback(function(){
    console.log("hi from callback")
  },[])


  return <div>
    <button onClick={
      function(){
        setCounter(counter+1)
      }
    }>Count {counter}</button>
    <Demo a={a}></Demo>
    
  </div>
}

const Demo=memo(function x({a}){
  console.log("render")
  return <div>
    Hi there {a}
  </div>
})
// Now you will not see Demo component do re-render again and again



//                            useCallback() implementation assignment

function App(){
  const [counter,setCounter]=useState(0)

  function onclick(){
    console.log("Child touched")
  }

  return <div>
    <button onClick={
      function(){
        setCounter(counter+1)
      }
    }>Count {counter}</button>
    <Child onclick={onclick}></Child>
    
  </div>
}

const Child=memo(function x({onclick}){
  return <div>
    <button onClick={onclick}>Button Clicked</button>
  </div>
})
  */



//                                              useRef() Hook
// Lets say u wanna do tax evasion , u wanna override wut your CA calcularwd as yr income tax
import { useEffect,useRef } from 'react'


const [incomeTax,setIncomeTax]=2000
const divRef=useRef()

useEffect(function(){
  setTimeout(function(){
    divRef.current.innerHTML="10"
  },5000)
},[])



function App(){
  return <div>
    income tax return = <div ref={divRef}>{incomeTax}</div>
  </div>
}



export default App
