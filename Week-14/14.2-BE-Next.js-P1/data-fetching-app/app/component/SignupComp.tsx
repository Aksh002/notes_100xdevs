"use client"
import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { PrismaClient } from "@prisma/client"
// const client = new PrismaClient()        // ImProper way of INstantiating Prisma client. Use Sigelton Prisma Client INstead
import { prisma } from "@/db";
import { SignupAction } from "../actions/user";


export function SignupComp() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput onChange={(e) => {
                            setUsername(e.target.value);
                        }} label="Username" placeholder="harkirat@gmail.com" />
                        <LabelledInput onChange={(e) => {
                            setPassword(e.target.value)
                        }} label="Password" type={"password"} placeholder="123456" />
                        <button onClick={
                        //     async ()=>{
                        //     // const response = await axios.post("http://localhost:3000/api/user",{
                        //     //     userName,
                        //     //     password
                        //     // })                       // Really  bad way to make a DB call, 
                        //     const user = await prisma.user.create({
                        //         data:{
                        //             userName:userName,
                        //             password:password
                        //         }
                        //     })                          // Hence,There is no need for route, you can just fetch,put data directly from server Components
                        //     console.log(user)
                        //     console.log(user.id)
                        // }// Noneed to do this much also,just Call the Server Action fxn
                        async ()=>{
                            console.log("button click")
                            const action=await SignupAction(userName,password)      // Return Type is determined if using Actions,not the same case for axios 
                            console.log(action)
                        }
                        } type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
                    </div>
                </div>
            </a>
        </div>
    </div>

}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}
