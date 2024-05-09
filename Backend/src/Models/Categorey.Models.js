import mongoose from "mongoose";

const categoreySchema = new mongoose.Schema({
    categoryNames:{
        type: String,
        required: true
    }
})


export const Categorey = mongoose.model('categorey',categoreySchema)