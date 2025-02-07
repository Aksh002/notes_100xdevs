import React from "react";

export default function fxn({children}:{
    children: React.ReactNode
}){
    return <div>
        <div className="border-b p-4 font-light">
            Admin Login:-
        </div>
        {children}
    </div>
}