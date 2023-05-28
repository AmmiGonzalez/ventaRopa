import 'dotenv/config'
import "./database/connectdb.js"
import express from "express";
import productRoutes from "./routes/product.router.js"

const app=express();
app.use(express.json())
app.use('/productos', productRoutes)

const PORT = process.env.PORT || 5002
app.listen(PORT,()=>console.log("http://localhost:"+PORT)); 