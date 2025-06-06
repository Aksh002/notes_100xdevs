//import { NextRequest, NextResponse } from "next/server";

// CATCH ALL ROUTES :- this route.ts catches all the routes that goes by /api/auth/...  (this is key in nextAuth, nextAuth overtakes the handling of this catch all eventually)
// Examples to show how DYNAMIC ROUTING on serverside components work and how can you access those dynamic routes

// export async function GET(                                  // These fxns need to be async to await the params
//   req: NextRequest,
//   context: { params: { authRoutes: string[] } }             // Object destructuring of params is not allowed, since it returns a promise
// ) {
//   try {
//     const { authRoutes: routeParams } = await context.params;               // Params is a promise , hence its access needs to be awaited 
//     // const routeParams = context.params.authRoutes; // This will not work as params is a promise, not an object

//     console.log('Route parameters:', routeParams);

//     return NextResponse.json({
//       message: "GET CALL",
//       path: routeParams
//     });
//   } catch (error) {
//     return NextResponse.json({
//       error: `Failed to process request, ${error}`
//     }, {
//       status: 500
//     });
//   }
// }
// export async function POST(
//   req: NextRequest,
//   context: { params: { authRoutes: string[] } }
// ) {
//   try {
//     // Apply the same fix to POST route
//     const params = await context.params;
//     const routeParams = params.authRoutes;

//     return NextResponse.json({
//       message: "POST CALL",
//       path: routeParams
//     });
//   } catch (error) {
//     return NextResponse.json({
//       error: `Failed to process request, ${error}`
//     }, {
//       status: 500 
//     });
//   }
// }


//                                      NextAuth


import { NEXT_AUTH } from "@/lib/auth";
import NextAuth from "next-auth";

import { string } from "zod";
//This handles the catch all routes and provide auth

const handler = NextAuth(NEXT_AUTH)


export const GET = handler;
export const POST = handler;