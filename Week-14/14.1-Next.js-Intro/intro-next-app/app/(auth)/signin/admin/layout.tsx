import React from "react";

export default function fxn({children}:{
    children: React.ReactNode
}){
    return <div>
    WELCOME THE ADMIN (from app/signin/admin/layout.tsx)
    <div>
        {children}
    </div>
</div>
}