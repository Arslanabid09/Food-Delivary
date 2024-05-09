import mongoose from "mongoose";


const orderitemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products',
        required: true
    },
    quantity:{
        type:Number,
        required: true
    }
})


export const Orderitems = mongoose.model('orderitems',orderitemSchema)