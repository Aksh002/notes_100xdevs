"use server"                // make sure to SPECIFY SERVER ACTIONS AS "use server"

import { prisma } from "@/db";

export async function SignupAction(userName:string,password:string){
    console.log(userName)
    console.log(password)
    try{
        const response = await prisma.user.create({
            data:{
                userName:userName,
                password:password
            }
        })
        console.log(response)
        return true
    }catch(error){
        console.log(error)
        return false
    }
}