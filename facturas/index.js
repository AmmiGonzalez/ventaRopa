import 'dotenv/config'
import "./database/connectdb.js"
import express from "express";
import billRoutes from "./routes/bill.router.js"

const app=express();
app.use(express.json())
app.use('/facturas', billRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log("http://localhost:"+PORT));