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
        let search=[]
        for(let i in todo){
            if(i.title==filter){
                search.push(i)
            }
        }
        return search;
    }
})
