import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import { get } from "mongoose";
import axios from 'axios';
import { promise } from "zod";

export const todoFamily=atomFamily({
    key:"todoFamily",
    default:id =>{                                  // For atomFamily, default value can be a fxn
        return TODOS.find(x=>x.id===id)
    }
})

export const todoFamilyAsync=atomFamily({
    key:"todoFamily",
    default: selectorFamily({
        key:"atomFamilySelector",
        get: (id) => async ({get})=> {
            const res=await axios.get(`http://localhost:3000/todo?id=${id}`)
            return res.data.data
        }
    })
})
// this one is quite diff from what we did in fetching data asyncronously from server into a single atom, there get, which returns async fxn that returns todo acc to the id from the server
// but here, get returns a fxn(a fxn passing id,returning todo dynamically, just like we did upar ko, here, purpose of this fxn is to do the same, return dynamically acc to the id) that returns an async fxn that returns the data acc to the id provided

// Simple way to put it:-
/*
export const todoFamilyAsync=atomFamily({
    key:"todoFamily",
    default: selectorFamily({
        key:"atomFamilySelector",
        get: function(id){
            return async function({get}){
                const res=await axios.get(`http://localhost:3000/todo?id=${id}`)
                return res.data.data
            }
        }
    })
})
*/

export const todoFamilyAsyncLod=atomFamily({
    key:"todoFamily",
    default: selectorFamily({
        key:"atomFamilySelector",
        get: (id) => async ({get})=> {
            await new Promise(r => setTimeout(r,5000))                          // THis will trigger the render of loading conditional 
            //throw new Error("BE  call Failed")                                // THos will trigger the render of hasError conditional
            const res=await axios.get(`http://localhost:3000/todo?id=${id}`)
            
            return res.data.data
        }
    })
})