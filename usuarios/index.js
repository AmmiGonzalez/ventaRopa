import 'dotenv/config';
import "./database/connectdb.js";
import express from "express";
import usserRoutes from "./routes/usser.router.js";

const app = express();
app.use(express.json());
app.use('/usuarios', usserRoutes);

const IP = '192.168.1.15'; // IP Local

const PORT = process.env.PORT || 5004;
app.listen(PORT, IP, () => console.log(`Servidor backend iniciado en http://${IP}:${PORT}`));
