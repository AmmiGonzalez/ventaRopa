import 'dotenv/config'
import "./database/connectdb.js"
import express from "express";
import sellerRoutes from "./routes/seller.router.js"

const app=express();
app.use(express.json())
app.use('/vendedores', sellerRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log("http://localhost:"+PORT)); 