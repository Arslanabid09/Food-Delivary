import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    orderItems:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'orderitems'
    },
    price:{
        type: String,
    },
    address:{
        type:String,
        required: true
    },
    status:{
        type: String,
        default: "Pending"
    },
    orderDate:{
        type: Date,
        default: Date.now
    }
},{timestamps: true});    

export const Orders = mongoose.model('orders',orderSchema)