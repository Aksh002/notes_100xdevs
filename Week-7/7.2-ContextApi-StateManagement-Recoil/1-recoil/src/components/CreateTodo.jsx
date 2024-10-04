import { useState } from "react"
import { todoAtom } from "../store/atoms/todo"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export function CreateTodo(){
  
    const [ title, setTitle]=useState("");
    const [ des, setDes]=useState("");
    const setTodo=useSetRecoilState(todoAtom)
    return <div>
      <input type="text" placeholder='Title' onChange={function(e){
        setTitle(e.target.value)
      }}/>

      <br />

      <input type="text" placeholder='Description' onChange={function(e){
        setDes(e.target.value)
  
      }}/>

      <br />

      <button onClick={function(){
        
        if (title!='' && des!='')
          console.log({title:title,des:des})
          setTodo(prevState=>([...prevState,{title:title,des:des}]));
      }}>Set Todo</button>

      <br />
    </div>
  }
