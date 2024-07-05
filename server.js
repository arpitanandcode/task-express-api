import express from 'express';
import mainRoutes from "./routes/index.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false, }));

app.use('/api/v1', mainRoutes); // Middleware 

const PORT = 8989;

app.listen(PORT, () => {
  mongoose.connect('mongodb+srv://dev:dev123@dev.qsf5a4u.mongodb.net/?retryWrites=true&w=majority&appName=dev').then(respose => {
    console.log("App is working on ," + PORT)
  }).catch(err => {
    console.log(err);
  })
});