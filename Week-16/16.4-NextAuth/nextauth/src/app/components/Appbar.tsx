"use client"

import { signIn, signOut, useSession } from "next-auth/react"
// No need to use navigation logic
export const Appbar = ()=>{
    const session = useSession();
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

        <div>
            Using useSession hook on client component:- {JSON.stringify(session)}
        </div>
    
    </div>
}