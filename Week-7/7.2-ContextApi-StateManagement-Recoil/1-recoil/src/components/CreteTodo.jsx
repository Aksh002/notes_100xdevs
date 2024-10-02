import { todoAtom } from "../store/atoms/todo"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export function InputBoxes(){
  
    let title=''
    let des=''
    return <div>
      <input type="text" placeholder='Title' onChange={function(e){
        title=e.target.value
      }}/>
      <input type="text" placeholder='Description' onChange={function(e){
        des=e.target.value
  
      }}/>
      <button onClick={function(title,des){
        SetTodo(title,des)
      }}>Set Todo</button>
    </div>
  }
  
function SetTodo(title,des){
  const setTitle=useSetRecoilState(todoAtom)
  if (title!='' && des!='')
    setTitle(prevState=>([...prevState,{title:title,des:des}]));
}