import 'dotenv/config';
import "./database/connectdb.js";
import express from "express";
import usserRoutes from "./routes/usser.router.js";

const app = express();
app.use(express.json());
app.use('/usuarios', usserRoutes);

const PORT = process.env.PORT || 5004
app.listen(PORT,()=>console.log("http://localhost:"+PORT)); 