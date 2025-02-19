import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {prisma?: PrismaClient}
// Gets printed eeverytime u HOT reload the code
console.log("Inside db.ts")
const prismaClientSigleton=()=>{
    //Gets print on the first npm run dev
    console.log("New prisma client gets instantiated, new connection established")
    return new PrismaClient()
}// Fxn will run only when nothing is in globalForPRisma 

// This globalForPrisma Makes sure that on every HOT RELOAD of the code(NEXT server reRuns), value of prisma remains preserved, as globalForPrisma itself doesnt get Reloaded when the Hot relaods
export const prisma = globalForPrisma.prisma || prismaClientSigleton();

if (process.env.NODE_ENV !== 'production')globalForPrisma.prisma = prisma

