
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
//import { CountContext } from './context'
//import { useContext } from 'react'
import { countAtom, evenSelector } from './store/atoms/count'
/*
function App() {
  // No need of state declaration here 
  return (
    <div>
        <Count></Count>
    </div>
  )
}

function Count(){
  // No need of state declararion here
  return <div>
    <RecoilRoot>
      <CountRenderer></CountRenderer>
      <Buttons></Buttons>
      <EvenRender></EvenRender>
    </RecoilRoot>
  </div>
  // Recoil root can be used in the component which is not using recoil logic but return components that r using recoil logic, could be used in app() also
}


function CountRenderer(){
  const count=useRecoilValue(countAtom)                     // Used when you need just the state value, this gives performance benifits over useRecoilState()
  return <div>
    {count}
  </div>

}

function Buttons(){
  //const setCount=useSetRecoilState()                        // Used when just set-state fxn is required
  
  //const [count,setCount]=useRecoilState(countAtom)            // Used when u need both state value and set-state fxn
  //we dont really need count here, we can increment count by this way too
  // setCount(function(e){
  //   c=c+1;
  // }) // It does the same job as count+1 does, by this way, we dont need count variable
  // And we really dont need to re-render button here too
  // So tackle both issues, we use this:-
  const setCount=useSetRecoilState(countAtom);
  return <div>
    <button onClick={
      function(){
        setCount(function(c){return c+1})
      }
    }>Increase</button>
    <button onClick={
      function(){
        setCount(count=>count-1)
      }
    }>Decrease</button>
  </div>
  // Now u will see no button rerenders, thats bcs of absence of state variable here
}

//                                                                Selectors
function EvenRender(){
  
  // Un optimal way
  // const count=useRecoilValue(countAtom)
  // return <div>
  //   {(count%2==0)?"This shit is even bitch":null}
  // </div>
  
  
 // Optimal way but by using selector instead of useMmemo
 const count=useRecoilValue(evenSelector)
 return <div>
  {(!count)?"This shit is even bitch":null}
 </div> 
}
*/

//                                                          Implementing Recoil in todo app
import { todoAtom } from './store/atoms/todo'
import { CreateTodo } from './components/CreateTodo'
import { Filtering } from './components/Filtering'
function App(){
  return <div>
    <RecoilRoot>
      <CreateTodo></CreateTodo>
      <Filtering></Filtering>
    </RecoilRoot>
  </div>
}

export default App
