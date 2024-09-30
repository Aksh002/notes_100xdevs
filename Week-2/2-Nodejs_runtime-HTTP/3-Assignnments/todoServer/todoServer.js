/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const express = require('express');
  const bodyParser = require('body-parser');
  
  const app = express();
  
  app.use(bodyParser.json());

  let count=4
  let todos=[{
    title:"workout",
    discription:"jogging and pushups",
    id:1,
    completed:true
  },
  {
    title:"workout",
    discription:"jogging and pushups",
    id:2,
    completed:false
  },
  {
    title:"workout",
    discription:"jogging and pushups",
    id:3,
    completed:false
  }]

  app.get("/todos",function(req,res){
    if (todos.length==0)
      res.status(404).send("No todos found")
    res.status(200).json(todos);
  })
  
  app.get("/todos/:id",function(req,res){
    if (todos.length==0)
      res.status(404).send("No todos found")
    res.status(200).json(todos.find(function(i){
      if (i.id==id)
        return i;
    }));
  })

  app.post("/todos",function(req,res){
    const todo=req.body
    todo.id=count++
    todos.push(todo)
    res.status(201).send("Todo appeneded succesfully"+todo.id)
  })

  app.put("/todos/:id",function(req,res){
    const todo=todos.find(function(i){
      return i.id==req.params.id
    })
    if (!todo)
      res.status(400).send("Todo not found with provided id")
    todo.title=req.body.title
    todo.completed=req.body.completed
    res.status(200).send(todo)
  })
  
  app.delete("/todos/:id",function(req,res){
    const p_id=parseInt(req.params.id,10)     // 10 here is the radix or base parameter. The radix is a number that specifies the base of the numerical system that you want to use for converting the string to an integer.
    const o_len=todos.length
    todos=todos.filter(function(todo){
      return todo.id!==p_id
    })

    if (todos.length===o_len)
      res.status(404).send("Todo not found")

    res.status(200).send("OK")
  })
  app.listen(3000)
  module.exports = app;