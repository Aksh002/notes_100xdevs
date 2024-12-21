import React from "react"

export default function fxn({children}:{
    children: React.ReactNode
}){
    return <div>
        <div className="text-center border-b font-mono">
            20% OFF for the next 3 days
        </div>
        {children}
    </div>
}