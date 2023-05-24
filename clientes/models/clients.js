import {Schema, model} from "mongoose";

const clientSchema=new Schema({
    NIT: {
        type: String,
        require: true,
        unique: true
    },
    Nombre:{
        type: String,
        require: true
    },
    FechaNacimiento:{
        type: Date,
        require: true
    },
    Telefono:{
        type: String,
        requiere: true
    },
    Correo: {
        type: String,
        require: false
    }
})

export const Client = model('client', clientSchema)