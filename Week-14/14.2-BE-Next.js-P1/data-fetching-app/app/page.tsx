import axios from "axios";
//                  Incorrect way to INSTANTIATE prisma:--
// import { PrismaClient } from "@prisma/client";
// const prisma= new PrismaClient()
//                  Correct way:--
import { prisma } from "@/db";

async function getUserDetails() {
  await new Promise((r)=>setTimeout(r,5000))
  // const response = await axios.get("http://localhost:3000/api/user")  // Improper way to fetch data
	// return response.data;
  const user = await prisma.user.findFirst()
  return user
}

export default async function Home() {
  const response= await getUserDetails()
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {response?.userName}
                </div>
                
                Email:{response?.password}
            </div>
        </div>
    </div>
  );
}
