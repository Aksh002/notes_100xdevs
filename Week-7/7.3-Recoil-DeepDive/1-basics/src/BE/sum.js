import express from "express";
import cors from "cors";
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
app.listen(3000)