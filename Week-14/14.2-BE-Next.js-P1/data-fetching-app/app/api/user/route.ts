import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient()
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
    const user = await client.user.create({
        data:{
            userName:body.userName,
            password:body.password
        }
    })
    console.log(user)

    return Response.json({
        msg:"You are logged in"
    })
}