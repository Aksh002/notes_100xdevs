import { useState } from 'react'

import './App.css'
import { set } from 'mongoose'


//                                                                        Prop drilling
// Creating counter without Context api
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count} setCount={setCount}></Count>
    </div>
  )
}

function Count({count,setCount}){
  return <div>
    {count}
    <Buttons count={count} setCount={setCount}></Buttons>
  </div>
  // Set count here is just getting passed down from child component to  the grandchild component, not being used in the child component, this is an example of prop drilling 
}

function Buttons({count,setCount}){
  return <div>
    <button onClick={
      function(){
        setCount(count+1)
      }
    }>Increase</button>
    <button onClick={
      function(){
        setCount(count-1)
      }
    }>Decrease</button>
  </div>
   
}
*/

import { CountContext } from './context'
import { useContext } from 'react'
function App() {
  const [count, setCount] = useState(0)
  // If we need to teleport this "count" state variable directly to any component from App() , || You gotta wrap the one who wants teleported value(here CountRendere) inside a provider. Provider provides the props

  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
        <Count></Count>
      </CountContext.Provider>
      
    </div>
  )
  // CountContext variable holds an object called provider which will provide count to whoever summons useContext over CountContext
}

function Count(){
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons></Buttons>
  </div>
}


function CountRenderer(){
  const {count}=useContext(CountContext)
  return <div>
    {count}
  </div>

}

function Buttons(){
  const {count,setCount}=useContext(CountContext)
  return <div>
    <button onClick={
      function(){
        setCount(count+1)
      }
    }>Increase</button>
    <button onClick={
      function(){
        setCount(count-1)
      }
    }>Decrease</button>
  </div>
   
}
export default App
