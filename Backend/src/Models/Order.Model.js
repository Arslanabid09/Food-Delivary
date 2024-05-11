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
    City:{
        type:String,

    },
    Area:{
        type:String,
    },
    subArea:{
        type:String,
    },
    streetName:{
        type:String,
    },
    ContectNumber:{
        type:String,
    },
    
    orderDate:{
        type: Date,
        default: Date.now
    }
},{timestamps: true});    

export const Orders = mongoose.model('orders',orderSchema)