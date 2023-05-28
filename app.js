const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const task = require("./routes/tasks");
const connectDb = require("./db/conn");
require('dotenv').config()


app.use(express.static('./public'))
app.use(express.json());

// routes
app.use("/api/v1/tasks", task);



const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server started at ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
