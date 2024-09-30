import { useState } from 'react'    // THis is used to import state variable fxnality, "useState" is called hook 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
function App() {

  // We need state,component
  
  //let state={
  //  count: 0}
  // You can define state variable in a certain way only, react wont consider any random variable as state, so this method wont work 
  

  const [count, setCount] = useState(0)
  // What this line basically does is , it applies Array destructuring but for object here, useState is like an array of objects containing the state of the variable thats being monitered by react,we are accesing the obj 0 and saving the value in count and setcount consists of a fxn returned by useState() fxn, whenever setCount fxn is trigerred, it trigers the inbuilt react fxn to  
  // setCOunt gives u a fxn, while count gives u the actual count
  
  // EG of dereferencing array:-
  //const arr=[1,2]
  //const [a,b]=arr       //a=1,b=2
  


  function onClickHandler(){
    // count+=1          // Wrong practice/way
    setCount(count+1)
  }
  return (
    <div>
        <button onClick={onClickHandler}>Counter {count}</button>                                    
    </div>
  )
  // Component(App here) always takes dynamic JS variables like state.count inside ( {} )
}


// We can destructure our code a litlle by not just shoving eveything in the parent component App directly, we can create a seperate fxn, a child component and shove that child inside the parent component. Better practice is to create multiple child component and shove them in parent
function App(){
  const [count, setCount] = useState(0)

  return <div>
    <CustomButton count={count} setCount={setCount}></CustomButton>
  </div>
}

// Child component
function CustomButton(props){       //{count,setCount} this could be param too
  // Its not just taking the state as an input, its also taking stateUpdater(setCount) as an input
  function onClickHandler(){
    props.setCount(props.count+1)
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}
*/
// Now lets create a propper todo webpage using react, where the state is an array of todos, how are we gonna print them
function App(){
  const [todos,setTodos]=useState([{        // Todos here is an array containing all this shit        // fxn of setTodos is to update the stuff stored in todos, whatever u pass in setTodos(...) gets stored in todos and react captures the stateChange 
    title:"Go to gym",
    description:"timming 9-10",
    completed:false
  },
  {
    title:"Study",
    description:"timming 6-8",
    completed:true
  },
  {
    title:"dinner",
    description:"timming 8-9",
    completed:true
  }])

  function addTodo(){
    setTodos([...todos,{
      title:"newTodo",
      description:"description",
      completed:false
    }])
    // wut setTodos([...todos,{}]) does is it updates the existing array and appends a new obj in the existing array named todos, ...todos indicates all the elements of the arrays 
  /*
  // This done above can also be done as :-
    function addTodo(){
      let newTodo=[]
      for(let i=0;i<todos.length;i++){
        newTodo.push(todos[i])
      }
      newTodo.push({
        title:"dvfsdcdc",
        description:"wdefds"
      })
    }
  */
 
  }
  
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function(todo,index){
        return (<Todo key={index} title={todo.title} description={todo.description}></Todo>)
      })}
      <DummyButton></DummyButton>
    </div>
  )
}

//todo app:- 
//        title, discription

// This basically a child component that takes state as an input and returns a printable div 
function Todo(props){
  return <div>
    <h3>{props.title}</h3>
    <h4>{props.description}</h4>
  </div>
}

function DummyButton(){
  console.log("Its a fcking dummy stateless component")
  return <button>DUMMY</button>
}
// Everytime a parent re-renders, its child re-render as well
// Doesnt matter i the child fxn takes the state as an input or not, it will get re-rendered if it is called n returned through parent fxn(App)
// So rerendering depends on change in state, but it re-renders the parent component, which triggers child component to rerender
export default App

