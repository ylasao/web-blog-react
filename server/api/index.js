import express from "express";
import mongoose from "mongoose";
import 'dotenv/config.js';
const app = express();
mongoose
  .connect(
    process.env.MONGO
  )
  .then(()=> {
    console.log('MongoDB is connect !')
  })
  .catch((err) => {
    console.log(err);
  })
  ;
app.listen(3000, () => {
  console.log("Server run on port 3000");
});
