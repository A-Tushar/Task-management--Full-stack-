const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes")

app.use(routes);
app.use(express.json())


mongoose.connect('mongodb+srv://todo:rWSfjWyXIsPrls2g@cluster0.ihacc8w.mongodb.net/todoapp?retryWrites=true&w=majority')
  .then(() => console.log('Database Connected!'));



app.listen(8000,()=>{
    console.log("port connected");
});