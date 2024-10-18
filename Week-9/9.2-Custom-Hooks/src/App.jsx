import React, { useEffect, useState } from 'react'

import './App.css'

function App() {

  return (
    <div>
      {/*<SetCountAsClass></SetCountAsClass>
      <ReturnInUseEffect></ReturnInUseEffect>
      <VanishIn10></VanishIn10>
      <ClassVanishIn10></ClassVanishIn10>*/}

    </div>
  )
}
/*
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
*/

//                                                                  CUSTOM HOOKS


export default App
