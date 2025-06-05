"use client"

import { signIn, signOut } from "next-auth/react"
// No need to use navigation logic
export const Appbar = ()=>{
    return <div>
        <button onClick={
            () => { signIn() }                      // Instead of useRoute this can be used from next auth
        }>
            Signin
        </button>

        <button onClick={
            ()=>{ signOut() }                       // Same for this
        }>
            Signout
        </button>
    
    </div>
}