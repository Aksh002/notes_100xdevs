import { PrismaClient } from '@prisma/client'
import { inflate } from 'zlib'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB
// Just like importing mongoose lib 

// This prisma alr consists of prisma.user and prisma.todos



//                                                          INSERT
async function insertUser(email:string,password:string,firstName:string,lastName:string) {
    const res=await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        },
        // select:{
        //     id:true,
        //     password:true
        // }                        // This will make sure only id and password is returned to res variable
    })

    console.log(res)
}
//insertUser("akshit@gmail.com","28072004","Akshit","Gangwar")



//                                                              UPDATE
interface UpdateParams{
    firstName: string,
    lastName: string
}

async function updateUser(email:string,{
    firstName,
    lastName
}:UpdateParams) {
    const res=await prisma.user.update({
        where:{
            email:email
        },
        data:{
            firstName,
            lastName
        }                                       // Explore the " ctrl + Click-on-user.update" file and figure out such params for the fxn calss, or just google
    })
    console.log(res)
}
// updateUser("akshit@gmail.com",{
//     firstName:"ak",
//     lastName:"gg"
// })


//                                                                  GET
async function getUser(email: string) {
    const res=await prisma.user.findMany({
        where:{
            email:email
        },
        select:{
            email:true,
            firstName:true,
            lastName:true
        }
    })
    console.log(res)
}
// getUser("akshit@gmail.com")

//                                                                      Get After relation
async function getTodos(userId: number) {
    const res=await prisma.todos.findMany({
        where:{
            userId:userId
        },
        select:{                            // Using select, we can instruct to get back the USer info also , which is related to the called todo
            id:true,
            title:true,
            user:{                          // Can use "true" if u wanna get all the details of the user
                select:{
                    id:true,
                    firstName:true,
                    email:true,
                    password:false,
                }
            }
        }
    })
    console.log(res)
}

getTodos(1);