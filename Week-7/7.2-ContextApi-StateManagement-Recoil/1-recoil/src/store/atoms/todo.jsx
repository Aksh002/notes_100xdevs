import { atom, selector } from "recoil";

export const todoAtom=atom({
    key:'todoAtom',
    default:[]
})

export const filterAtom=atom({
    key:"filterAtom",
    default:""
})

export const filterSelector=selector({
    key:"filterSelector",
    get:({get})=>{
        const todo=get(todoAtom)
        const filter=get(filterAtom)
        
        //return todo.filter(todo => todo.title.includes(filter)); // Filtering todos based on partial title match      //The reason you're seeing all the todos when nothing is being searched is that in your current implementation, the filter condition (filter) is always checked with .includes(). When the filter is an empty string (""), the .includes() method matches all todos because every string contains an empty string.
        
        // let s = [];
        // for (let i = 0; i < todo.length; i++) {
        //     if (todo[i].title.includes(filter)) { // Partial match filtering
        //         s.push(todo[i]);
        //     }
        // }
        //  OR
        // todo.map(function(td){
        //     if (td.title==filter) { // Partial match filtering
        //                  s.push(td);
        //              }
        // })// In this implementation only the todos with searched name will be showen
        //return s;
    }
})
