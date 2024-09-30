import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

// This App.jsx is like my index.html file, whatever i type here gets rendered
// Page looks pretty bcs of all the css imported here
function App() {
  const [count, setCount] = useState(0) 
  // Just like in todo we got todo array as a state varibale, which constantly needs to be watched for change and taken action uppon
  // Here that role is played by count variable, count is the state variable here
  // State variables are those variables that react needs to conciously agressively watch, like if this changes dom needs to be changed 
  // this "setCount fxn does that work"

  return (
    <div>  
        <button onClick={function(){
          setCount(function(count) { 
            return count + 1
            })
          }
        }>
          count is {count}
        </button>
    </div>
  )
}

export default App
