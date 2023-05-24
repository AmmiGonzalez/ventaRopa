import {Schema, model} from "mongoose";

const productSchema=new Schema({
    Descripcion: {
        type: String,
        require: true
    },
    PrecioCompra: {
        type: Number,
        requiere: true
    },
    PrecioVenta: {
        type: Number,
        requiere: true
    },
    Color: {
        type: String,
        requiere: true
    },
    Marca: {
        type: String,
        requiere: true
    },
    Talla: {
        type: String,
        requiere: true
    }
})

export const Product = model('product', productSchema)