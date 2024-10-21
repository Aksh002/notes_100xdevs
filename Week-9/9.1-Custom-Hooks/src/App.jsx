import React, { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
/*
function App() {

  return (
    <div>
      {/*<SetCountAsClass></SetCountAsClass>
      <ReturnInUseEffect></ReturnInUseEffect>
      <VanishIn10></VanishIn10>
      <ClassVanishIn10></ClassVanishIn10>*//*}

    </div>
  )
}

// useState in class based components
class SetCountAsClass extends React.Component{
  constructor(props){
    super(props)
    this.state={count:0}
  }

  incrementCount = ()=>{
    this.setState({count:this.state.count + 1 })
  }

  render(){
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}

// Return fxn in useEffect
function ReturnInUseEffect(){
  useEffect(()=>{
    console.log("Mounted")

    return()=>{
      console.log("Unmounted")
    }
  },[])

  return (<div>
    Return in useEffect
  </div>)
}

function VanishIn10(){
  const [visible,setVisible]=useState(true)
  useEffect(()=>{
    // setTimeout(()=>{
    //   setVisible(false)
    // },10000)
    setInterval(()=>{
      setVisible(t=>!t)
    },5000)
  },[])
  // This basically will show "Unmounted" will be logged bcs of triggrt of return fxn every time the component is unmounted due to visible=false
  return <div>
    {visible?<ReturnInUseEffect></ReturnInUseEffect>:<div>2nd component</div>}
  </div>
}

// Class based component of ReturnInUseEffect
class ClassReturn extends React.Component{
  componentDidMount(){        // These are keyword lifeciycle methods, just like render
    console.log("Mounted")
  }

  componentWillUnmount(){
    console.log("Unmounted")
  }

  render(){
    return <div>ClassReturn</div>
  }
}
function ClassVanishIn10(){
  const [visible,setVisible]=useState(true)
  useEffect(()=>{
    // setTimeout(()=>{
    //   setVisible(false)
    // },10000)
    setInterval(()=>{
      setVisible(t=>!t)
    },5000)
  },[])
  // This basically will show "Unmounted" will be logged bcs of triggrt of return fxn every time the component is unmounted due to visible=false
  return <div>
    {visible?<ClassReturn></ClassReturn>:<div>2nd component</div>}
  </div>
}


//                                                                  CUSTOM HOOKS
function useTodos(){
  const [todos,setTodos]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    
      axios.get("http://localhost:3000/todos")
      .then((response)=>{
        setTodos(response.data.todos)
        setLoading(false)
      })    
  },[])
  
  return {todos,loading}
}

function App(){
  const { todos,loading }=useTodos()

    return <div>
      {loading?<div>Loading</div>:todos.map((todo,index)=>
         (<Todo todo={todo} key={index}></Todo>)
      )}
    </div>
  
}

function Todo({todo}){
  return <div>
    <div>{todo.title}</div>

    <div>{todo.description}</div>
  </div>
}


// WHat if we want a custom hook that polls a backend at an interval of n sec 

function useTodos(n){
  const [todos,setTodos]=useState([])
  const [loading,setLoading]=useState(true)

  
// Key issue to deal with here is if we provide an input box to the user and get the value of n dynamically, as the value of n changes,if n is assigned as dependency in useEffect(), useEffect will trigger again, which will lead to the start of another clock as the last clock was not killed
// So if we wanna pass n as dependecy, we need to make sure everytime useEffect id called (bcs of change in n), make sure to kill the prev clock. This is where return() fxn comes in the oicture
  useEffect(()=>{
    const interval=setInterval(()=>{              //THis provides a calue to the variable, if the variable is cleared, interval clock is killed
      axios.get("http://localhost:3000/todos")
      .then((response)=>{
        setTodos(response.data.todos)
        setLoading(false)
      })
    },n*1000)

    // This call is to render for the first time, otherwise it will render Loading for first 5 sec, for those 5 sec this one will ender
    axios.get("http://localhost:3000/todos")
      .then((response)=>{
        setTodos(response.data.todos)
        setLoading(false)
      })

      return()=>{                     // THis cleanup will run every time n changes before new clock is abt to start, it clear the prev one 
        clearInterval(interval)
      }
          
  },[n])       
  
  return {todos,loading}
}

function App(){
  const [timer,setTimer]=useState(999)
  const { todos,loading }=useTodos(timer)

    return <div>
      <div>
        <input type="text" name="timer" id="10" placeholder='timer' onChange={(e)=>{
          setTimer(e.target.value)
        }} />
      </div>
      {loading?<div>Loading</div>:todos.map((todo,index)=>
         (<Todo todo={todo} key={index}></Todo>)
      )}
    </div>
  
}

function Todo({todo}){
  return <div>
    <div>{todo.title}</div>

    <div>{todo.description}</div>
  </div>
}


//                                                                      SWR Library
// We can do the same shit using swr lib
import swr from 'swr'
import useSWR from 'swr'

const fetcher =async function (url) {
  const data=await fetch(url);
  const json=await data.json();
  return json
}

function Profile(){
  const { data,error,isLoading}=useSWR("http://localhost:3000/todos",fetcher)

  if (error){
    return <div>Failed to load</div>
  }
  else if (isLoading){
    return <div>
      Loading.....
    </div>
  }
  else{
    return <div>
      {data.todos.map((todo,index)=>
         (<Todo todo={todo} key={index}></Todo>)
      )}
    </div>
  }
}

function Todo({todo}){
  return <div>
    <div>{todo.title}</div>

    <div>{todo.description}</div>
  </div>
}

function App(){
  return <div>
    <Profile></Profile>
  </div>
}
  

// Hook that returns true/false based on wethter the user is online or offline 
function useIsOnline(){
  const [online,setOnline]=useState(window.navigator.onLine)

  useEffect(()=>{
    addEventListener('online',()=>{setOnline(true)})

    addEventListener('offline',()=>{setOnline(false)})
  },[])

  return online;
} 

function App(){
  const isOnline=useIsOnline()
  return <div>
    {isOnline?<div>USer is ONline</div>:<div>User is Offline</div>}
  </div>
}


// Now we making a hook that gives the live location of mouse on movement
function useMousePointer(){
  const [position,setPosition]=useState({x:0,y:0})

  const mouseHandler=(e)=>{
    setPosition({x:e.clientX,y:e.clientY})
  }

  useEffect(()=>{
    addEventListener('mousemove',mouseHandler)

    return ()=>{
      window.removeEventListener('mousemove',mouseHandler)
    }
  },[])

  return position;
}

function useDimensions(){
  const [hieght,setHieght]=useState(window.innerHeight)
  const [width,setWidth]=useState(window.innerWidth)

  const updateDimension=()=>{
    setHieght(window.innerHeight)
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
    
    addEventListener('resize',updateDimension)

    return ()=>{
      removeEventListener('resize',updateDimension)
    }
  },[])
  
  return {hieght,width}
}

function App(){
  const position=useMousePointer()

  const {width,hieght}=useDimensions()

  return <div>
    <div>
      Mouse at ({position.x} , {position.y})
    </div>
    <br />
    <div>
      Dimensions = {hieght} X {width}
    </div>
  </div>
}


// Performance/Timer Hooks

function useInterval(fxn,timeout){
  useEffect(()=>{
    const interv=setInterval(()=>{
      fxn()
    },timeout)

    return ()=>{
      clearInterval(interv)
    }
  },[timeout])
}

function App(){
  const [count,setCount]=useState(0)

  useInterval(()=>{
    setCount(c=>c+1)
  },1000)

  return <div>
    Count {count}
  </div>
}
  */

//  useDebouncing Hook

function useDebouncing(value,timeout){
  const [debouncedValue,setDebouncedValue]=useState(value)
  useEffect(()=>{
    let timeoutnum=setTimeout(()=>{
      setDebouncedValue(value)
    },timeout)

    return ()=>{
      clearInterval(timeoutnum)
    }
  },[value])


  return debouncedValue;
}

function App(){
  const [value,setVAlue]=useState('')
  const debouncedValue=useDebouncing(value,500)
  return <div>
    <input type="text" name="" id="" placeholder='input' onChange={(e)=>{
      setVAlue(e.target.value)
    }} />
    <div>Debounced Value is {debouncedValue}</div>
  </div>
}




export default App
