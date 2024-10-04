import { useRecoilValue, useSetRecoilState } from "recoil"
import { filterAtom, filterSelector } from "../store/atoms/todo"
export function Filtering(){
    const setFilter=useSetRecoilState(filterAtom)
    const search=useRecoilValue(filterSelector)
    return <div>
        <input type="text" placeholder="Seach" onChange={function(e){
            setFilter(e.target.value)
        }} />
        {search.map(function(todo,index){
            return (<div key={index}>                               
                <h2>{todo.title}</h2>
                <h3>{todo.des}</h3>
            </div>)
        })}
    </div>
}
