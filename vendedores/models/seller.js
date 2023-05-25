import {Schema, model} from "mongoose";

const sellerSchema=new Schema({
   Nombre:{
    type: String,
    requiere: true
   },
   FechaNacimiento: 
   {
    type: Date,
    requiere: true
   },
   Telefono:
   {
    type: String,
    requiere: true
   },
   Salario:{
    type: Number,
    requiere: true
   },
   FechaContratacion:{
    type: Date,
    requiere: true
   },
   Correo: {
    type: String,
    requiere: false
   }
})

export const Seller = model('seller', sellerSchema)