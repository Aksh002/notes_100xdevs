import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// This is to demonstrate getServerSession()
export async function GET(){
    const session = await getServerSession()
    return NextResponse.json({
        "session":session
    })
}