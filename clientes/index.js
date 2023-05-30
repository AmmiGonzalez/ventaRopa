import 'dotenv/config'
import "./database/connectdb.js"
import express from "express";
import clientRoutes from "./routes/client.router.js"
import cors from "cors"

const app=express();
app.use(express.json())
app.use(cors())
app.use('/clientes', clientRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log("http://localhost:"+PORT));