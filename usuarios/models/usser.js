import {Schema, model} from "mongoose";

const usserSchema=new Schema({
   Nombre:{
    type: String,
    requiere: true
   },
   Contrasenia: {
    type: String,
    requiere: true
   }
})

export const Usser = model('usser', usserSchema)