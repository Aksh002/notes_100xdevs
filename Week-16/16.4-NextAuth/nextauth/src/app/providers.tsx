"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

export const Providers = ({children}:{children : ReactNode})=>{
    // In this fxn , you wrap ur entire code with provider
    // Some other providers that can be used to wrap are :- ThemeProvider , RecoilRoot 
    return <div>
        <SessionProvider>
            {children}
        </SessionProvider>
    </div>
}