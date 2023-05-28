import crypto from "crypto"
import dotenv from 'dotenv';
dotenv.config();

const key = process.env.KEY;; 

// Cadena de conexión cifrada
const encryptedConnectionString = process.env.URI_MONGO;

// Descifrar la cadena de conexión
const decipher = crypto.createDecipher('aes-256-cbc', key);
let decrypted = decipher.update(encryptedConnectionString, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Cadena de conexión descifrada:', decrypted);

// Conectarse a la base de datos
import mongoose from "mongoose";
mongoose.connect(decrypted, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });
