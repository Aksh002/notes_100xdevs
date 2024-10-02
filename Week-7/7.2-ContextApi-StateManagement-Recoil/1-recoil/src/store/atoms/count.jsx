import { atom, selector } from "recoil"

export const countAtom= atom({
    key:"countAtom",                // To uniquely identify each atom
    default:0
})

// Using selector deriving countAtom state
export const evenSelector=selector({
    key:"evenSelector",
    get:function(props){                                // No need of props as parameter and also as fxn,if u pass {get} instead in params
        const count=props.get(countAtom)                // THis here is importing dependency for selector,just like useMemo, it could be mutyiple too
        return count % 2;
    }
})
// Selector could depend on/derived from multiple states