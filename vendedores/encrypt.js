import crypto from "crypto"
const key = 'clave-secreta';

// Cadena de conexión a cifrar
const connectionString = 'mongodb+srv://ammigonzalezhkh:lyrzVPfKi9zPeUjy@cluster0.xdpc4gy.mongodb.net/ventaRopa ';

// Cifrar la cadena de conexión
const cipher = crypto.createCipher('aes-256-cbc', key);
let encrypted = cipher.update(connectionString, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Cadena de conexión cifrada:', encrypted);
