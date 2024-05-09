import mongoose  from 'mongoose';


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
       type: String, 
       required: true
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref: "categorey",
    //     required: true
    },
    productimage:{
        type: String,
    },
    CreatedDate:{
        type: Date,
        default: Date.now
    }
    },{timestamps:true})
 
export const Products = mongoose.model('products',productSchema)