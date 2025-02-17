import { NextRequest } from "next/server"

export function GET(){
    return Response.json({
        name:"Akshit",
        email:"akshit@gmail.com"
    })
}

export async function POST(req : NextRequest){
    const body =await req.json()
    console.log(body)

    // Put this data in db

    return Response.json({
        msg:"You are logged in"
    })
}