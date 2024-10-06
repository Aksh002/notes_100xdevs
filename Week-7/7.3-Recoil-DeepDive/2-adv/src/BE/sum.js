import express from "express";
import cors from "cors";
import { TODOS } from "../todos.js";
const app = express();
app.use(cors());

app.get("/notif",function(req,res){
    const r = [];
  for (let i = 0; i < 5; i++) {
    r.push(Math.floor(Math.random()*10));
  }
  res.json({
    networks: r[0], 
    jobs: r[1], 
    messaging: r[2], 
    notifications: r[3]
  })
})

app.get("/todo", function (req, res) {
  const id = req.query.id;  // Use req.query for query parameters
  const data = TODOS.find(x => x.id == id);  // Use == since req.query.id is a string
  res.json({
    data,
  });
});


app.listen(3000)