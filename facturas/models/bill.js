import {Schema, model} from "mongoose";

const billSchema=new Schema({
    FechaEmision: {
        type: Date,
        require: true
    },
    IDProducto: {
        type: {
          type: String,
          required: true
        },
        Cantidad: {
          type: Number,
          required: true
        },
        SubTotal: {
          type: Number,
          required: true
        }
    },
    Total:{
        type: Number,
        require: true
    },
    IDCliente: {
        type: String,
        require: true
    }
})

export const Bill = model('bill', billSchema)