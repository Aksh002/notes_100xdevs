"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signin() {
    const router = useRouter();
    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")
    return <div>
        <input placeholder='username' type='email' onChange={(e)=>{setUserName(e.target.value)}}></input>
        <input placeholder='password' type='text' onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button onClick={async () => {
            const res = await signIn("credentials", {
                username: username,
                password: password,
                redirect: false,
            });
            console.log(`response after button click:-${res}`);
            router.push("/")
        }}>Login with email</button>

       <div key={"google"}>
         <button onClick={async () => {
            await signIn("google");
        }}>Login with google</button>
       </div>

        <br />
        <button onClick={async () => {
            await signIn("github");
        }}>Login with Github</button>
        <br />
        
        
    </div>
}