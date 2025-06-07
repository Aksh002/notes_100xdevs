import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
// The argument object for NextAuth() fxn is stored here bcs it needs to passed in getServerSession() too 
export const NEXT_AUTH = {                  // 
    providers:[                             // Providers:- All the services used are listed here 
        CredentialsProvider({               // THis takes an object of :- Input fields || auth logic that trigers on clicking login
            name:"Email",
            credentials: {
                username:{ label: 'Username' , type: 'text' , placeholder: 'Email' },
                password:{ label: 'Password' , type: 'password' , placeholder: 'Password' }
            },
            async authorize(credentials:any){               // This  fxn is for db check 
                console.log(credentials)

                // Logic to authorize from db
                // const user = await prisma.user.findOne({
                //     where:{
                //         email: credentials.username,
                //         password: credentials.password
                //     }
                // })

                // return {                                    // This return statement is key, if user is authorize, we return user data to construct token, else we return NULL 
                //     id: user.id,
                //     email: user.email
                // }
                // return null;                             // If user doesnt exist


                return {
                    id:"user1",
                    name:"Akshit gangwar",
                    email: credentials.username
                }
            }
        }),
        GoogleProvider({
            clientId : process.env.GOOGLE_ID || "",
            clientSecret : process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GithubProvider({
            clientId : process.env.GITHUB_ID || "",
            clientSecret : process.env.GITHUB_CLIENT_SECRET || ""
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async signIn({user , account, profile}){

            console.log(`user object from signIn callback:- ${JSON.stringify(user)}`);

            // Ye dono undefined aa rhe hai, idk why
            console.log(`account object from signIn callback:- ${JSON.stringify(account)}`);
            console.log(`user object from signIn callback:- ${JSON.stringify(profile)}`);

            if (user.email=="hacker@gmail.com"){
                return false                                        // Return FALSE to unauthorize the user 
            }

            // This part of code, idk what it does,uncomment it and there it is a fckin error in ur face,  task for the future Akshit
            // if (account.provider === "google") {
            //     console.log("Google signin trigger");
            //     console.log(account);
            //     console.log(profile);
            //     return profile.email_verified && profile.email.endsWith("@example.com")
            // }

            else
                return true
        },
        jwt: async ({token,account,profile}) => {                   // Another way of writting these callbacks
            console.log(`token from call:- ${JSON.stringify(token)}`)
            console.log(`acount from call:- ${JSON.stringify(account)}`)
            console.log(`profile from call:- ${JSON.stringify(profile)}`)
            token.userId = token.sub

            return token;
        },
        session: async({session , token , user}) =>{
            console.log(`Session before session callback:- ${JSON.stringify(session)}`)
            if (session.user) {
                session.user.id = token.userId;                        // Assigning sub to session user id 
            }
            // THis succeding means jwt callback is invoked before session callback
            console.log(`Session before session callback:- ${JSON.stringify(session)}`) // Additional feild id will be present in session -> user object
            return session;
        }
    },
    pages:{
        signIn: "/signin"
    }
}