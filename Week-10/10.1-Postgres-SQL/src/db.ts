//                                                              PG library 

// Connecting
import { Client } from 'pg' 

const client=new Client({
    host:'localhost',
    port:5432,
    database:'postgres',
    user:'postgres',
    password:'mysecretpassword',
    //connectionString:'postgresql://postgres:mysecretpassword@localhost:5432/postgres'             // THis can be used to connect too instead of the top data
})



//                                                                  Create a table
async function createTable(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE subusers (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}


async function inputData() {
    //This is an insecure way to store data in your tables. When you expose this functionality eventually via HTTP, someone can do an SQL INJECTION to get access to your data/delete your data.
    try{
        await client.connect()
        const insertQuery="INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');"
        const res=await client.query(insertQuery)
        console.log("Insertion success =",res)
    }catch(error){
        console.log("Error during insertion:",error)
    }finally{
        await client.end()                      // Close the client connection
    }   
}

//inputData()

async function inputDataSecurely(username:String,email:String,password:String){
    try{
        await client.connect()

        const insertQuery="INSERT INTO users (username, email, password) VALUES ($1,$2,$3);"            // User provided values are not placed into querry as it is
        const values=[username,email,password]                                                          // ...It is first cpnerted to constants
        const res=await client.query(insertQuery,values)                                                // ...Then Supplied

        console.log("Insertion success =",res)
    }catch(error){
        console.log("Error during insertion:",error)
    }finally{
        await client.end()                      // Close the client connection
    } 
} 


async function getData(email:String) {
    try{
        await client.connect()

        const insertQuery="SELECT * FROM users WHERE email=$1;"
        const values=[email]
        const res=await client.query(insertQuery,values)

        if (res.rows.length>0){
            console.log("User Found: ",res.rows[0])
            return res.rows[0]
        }else{
            console.log('No user found with the given email')
            return null
        }
        
    }catch(error){
        console.log("Error during insertion:",error)
    }finally{
        await client.end()                      // Close the client connection
    } 
}

//getData("user3@example.com").catch(console.error)




//                                                  RELATIONS
async function relations() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE subusers2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(100) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `)
    console.log(result)
}
//relations()

// Puttin data
async function relationInsert(user_id:number, city:string, country:string, street:string, pincode:number){
    try{
        await client.connect()
        const values=[user_id, city, country, street, pincode]
        const query=" INSERT INTO addresses(user_id, city, country, street, pincode) VALUES ($1,$2,$3,$4,$5)"
        const result=await client.query(query,values)
        console.log(result)
    }catch(error){
        console.log("Error during insertion:",error)
    }finally{
        await client.end()                      // Close the client connection
    } 
}
//relationInsert(1,'Rampur','India','radha road',244901)

// Getting data
// SELECT city, country, street, pincode
// FROM addresses
// WHERE user_id = 1;



//                                                              JOINS

// Eg code:-

    // SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
    // FROM users
    // JOIN addresses ON users.id = addresses.user_id
    // WHERE users.id = '1';

    // SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
    // FROM users u
    // JOIN addresses a ON u.id = a.user_id
    // WHERE u.id = YOUR_USER_ID;

async function join(user_id:number){
    try{
        await client.connect()
        
        const query="SELECT u.id, u.username, u.email, a.country, a.street, a.pincode FROM subusers2 u JOIN addresses a ON u.id=a.user_id WHERE u.id=$1"
        const result=await client.query(query,[user_id])
        console.log(result)

    }
    catch(error){
        console.log("Error during insertion:",error)
    }finally{
        await client.end()                      
    }
}
join(1)