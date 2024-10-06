import './App.css'
import { useRecoilValue,RecoilRoot, useSetRecoilState, useRecoilValueLoadable, useRecoilStateLoadable } from "recoil"
import { todoFamily, todoFamilyAsync, todoFamilyAsyncLod } from './atoms'
import { useEffect } from 'react'
/*
//                                                  AtomFamily(id):-
// More like an array of atoms that create and pass an atom when its fxn called with id
function App() {
  

  return (
    <div>
      
      <RecoilRoot>
        <UpdateComponent></UpdateComponent>
        <Todo id={1}></Todo>
        <Todo id={2}></Todo>
        <Todo id={2}></Todo>
        <Todo id={2}></Todo>
      </RecoilRoot>
    </div>
  )
}

function Todo({id}){
  const current=useRecoilValue(todoFamily(id))
  return <div>
    {current.title} 
    <br />
    {current.des}
    <br />
  </div>
}

// THis fxn will help us understand how we gonna access todoAtoms from atomFamily and make changes to them
function UpdateComponent(){
  const update=useSetRecoilState(todoFamily(2))

  useEffect(()=>{
    setTimeout(()=>{
      update({
        id:"2",
        title:"web dev",
        des:"lec 8.1"
      })
    },5000)
  },[])
  return <div>
    Done
  </div>
}


//                                                          selectorFamily
// What if the data is coming from Backend server instead of it being hardcoded
// Even for atomFamily, which allows default value to be fxn, it doesnt support async calls
// To deal with async calls we use sleectorFamily, defualt value of which can be an async fxn
// Response is from the server http//:localhost:3000/todo?id
// CHeck atoms.jsx to see the code for this
// If we dont use selectorFamily for atomFamily, it wont create an array of selectors with seperate key for seperate todoFetching but just one selector with single key, making it bad for access and control

function App() {
  

  return (
    <div>
      
      <RecoilRoot>
        <UpdateComponent></UpdateComponent>
        <Todo id={1}></Todo>
        <Todo id={2}></Todo>
        <Todo id={2}></Todo>
        
      </RecoilRoot>
    </div>
  )
}

function Todo({id}){
  const current=useRecoilValue(todoFamilyAsync(id))
  return <div>
    {current.title} 
    <br />
    {current.des}
    <br />
  </div>
}


function UpdateComponent(){
  const update=useSetRecoilState(todoFamilyAsync(2))

  useEffect(()=>{
    setTimeout(()=>{
      update({
        id:"2",
        title:"web dev",
        des:"lec 8.1"
      })
    },5000)
  },[])
  return <div>
    Done
  </div>
}
  */
//                                                          useRecoilStateLoadable()  ,   useRecoilValueLoadable()
// Used to render a placeholder while the data is fetched from the backend
// Its concept is it returns 2 parts, "state" & "contents".
// contents store the state variable of the atom,whatever there was in default
// State consists of the state of the atom. 3 states are possible: "loading"    "hasValue"    "hasError"


function App() {
  

  return (
    <div>
      
      <RecoilRoot>
        
        <Todo id={1}></Todo>
        <Todo id={2}></Todo>
        <Todo id={2}></Todo>
        
      </RecoilRoot>
    </div>
  )
}

function Todo({id}){
  const current=useRecoilValueLoadable(todoFamilyAsyncLod(id))
  //const [todo,setTodo]=useRecoilStateLoadable(todoFamilyAsyncLod(id))             //same use
  console.log(current.state)
  if (current.state==="loading"){
    return <div>
      loading.......
    </div>
  }
  else if (current.state==="hasError"){
    return <div>
      Error while getting data from backend
    </div>
  }
  else if(current.state==="hasValue"){
    return <div>
      {current.contents.title} 
      <br />
      {current.contents.des}
      <br />
    </div>
  }
  
}
export default App
