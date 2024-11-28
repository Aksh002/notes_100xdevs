// Import the pg library
const { Client } = require('pg');

// Define your connection string (replace placeholders with your actual data)
const connectionString = 'postgresql://akshit:mysecretpassword@localhost:5430/akshitdb';    //db1
// const connectionString = 'postgresql://akshit:mysecretpassword@localhost:5431/akshit';   //db2
// Create a new client instance with the connection string
const client = new Client({
  connectionString: connectionString
});

// Connect to the database
client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to the database');
  }
});

// Run a simple query (Example: Fetching the current date and time from PostgreSQL)
client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows[0]);
  }

  // Close the connection
  client.end();
});