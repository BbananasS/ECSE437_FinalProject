const express = require("express")
const mongoose = require("mongoose");

const PORT = 3030;
const app = express();
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/todolist", {useUnifiedTopology: true, useNewUrlParser:true})
    .then(()=> console.log("Connected Successfully"))
    .catch((err) => console.error(err));

app.use("/todo/", todoRoutes);
 
app.listen(PORT, ()=> {
    console.log("The server is listening on port " + PORT);
});