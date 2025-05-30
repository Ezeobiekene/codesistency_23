import mongoose from "mongoose";

const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {timestamps: true})

export const Product = mongoose.model('Product', productSchema)