// Creating a header component that takes title as a component and rendersit inside a div
// THe top level app renders 2 headers
// LEarning :- -Can only return single child div 
//             -USe of <> </>

import React, { useState } from 'react'
import './App.css'
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title='Akshit 1'></Header> <br />
      <Header title='Akshit 2'></Header> <br />
    </>
  )
  // USong <> weill let us not add an extra useless <div>
  //        -Can use  "<React.Fragment></React.Fragment>" also for this
}

function Header({title}){
  return (<div>
    {title}
  </div>)
}


// Now we try to selectively render the first title only to reduce re-render
function App() {
  const [title, setTitle] = useState(0)

  return (
    <>
      <button onClick={
        function(){
          setTitle("My name is :"+ Math.random())
        }
      }>Click here to change first title</button>
      <Header title={title}></Header> <br />
      <Header title='Akshit 2'></Header> <br />       {/* It should not re-render this , as its static*/ //}
    //</>
  //)
  // USong <> weill let us not add an extra useless <div>
  //        -Can use  "<React.Fragment></React.Fragment>" also for this
//}
/*
function Header({title}){
  return (<div>
    {title}
  </div>)
}



//                                                              Pushing state variable down 
function App() {
  

  return 
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title='Akshit 2'></Header> <br />       
    </>
  
  // USong <> weill let us not add an extra useless <div>
  //        -Can use  "<React.Fragment></React.Fragment>" also for this
}

function HeaderWithButton(){

  const [title, setTitle] = useState(0)

  function updatetitle(){
    setTitle("My name is :"+ Math.random())
  }

  return (<div>
  <button onClick={updatetitle}>Click here to change first title</button>
  <Header title={title}></Header> <br />
  </div>)
}

function Header({title}){
  return (<div>
    {title}
  </div>)
}
*/
//                                                                React.memo
// This is another way to minnimise re-rendering
// Lets u skip re-rendering the component whose props is not changed


function App() {
  const [title, setTitle] = useState(0)

  function updatetitle(){
    setTitle("My name is :"+ Math.random())
  }

  return (
    <>
      <button onClick={updatetitle}>Click here to change first title</button>
      <Header title={title}></Header> <br />
      <Header title='Akshit 2'></Header> <br />       
    </>
  )
  // USong <> weill let us not add an extra useless <div>
  //        -Can use  "<React.Fragment></React.Fragment>" also for this
}

const Header=React.memo(function Header({title}){
  return (<div>
    {title}
  </div>)
})

export default App
