import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { useEffect } from 'react';

function App() {
  //declaring our state variable
  const [todos, setTodos] = useState([]);

  // Wrong way:-
  // fetch("http://localhost:3000/todos")
  // .then(async function(res){
  //   const json = await res.json()
  //   setTodos(json.todos)
  // })
  // This method is fundamentally flawed. If you inspect ur page and go to netwotk tab, u ll see 100s of requests going out constantly, this is happening because, whenever we are calling updateTodo(...), it triggers state change, and when the state gets changed, App() gets re-rendered
  // which causes to run the fetch request over and over again


  
  // Correct way:-

  //              useEffect hook(another version of useState())
  // Fetching todos with useEffect hook to prevent multiple fetch requests
  useEffect(function(){
    fetch("http://localhost:3000/todos")
            .then(async function(res) {
                const json = await res.json();
                setTodos(json.todos);
  })
  },[])         // Empty dependency array ensures the fetch happens only once when component mounts

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
