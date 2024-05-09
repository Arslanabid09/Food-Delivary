import { user } from "../Models/User.Model.js";
import mongoose from "mongoose";




//  getting all users from database
const getUser = async(req,res)=>{
    try {
        const users = await user.find().sort({"createdAt":-1})
        if(users){
            return res.status(200).send(users)
        }else{
            return res.status(400).send({Message:"ERROR IN FETCHING ERROR"})
        }
    } catch (error) {
        console.log(`ERROR:${error}`);
    }
}
// getting a single user By Id
const singleUser = async (req, res) => {
    try {
        const response = await user.findOne({_id:req.params.id },).sort({"createdAt":-1});
        if (response) {
            return res.status(200).json(response);
        } else {  
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Deleting single User By Id From Database
    const deletingUser = async(req,res)=>{
       try {
        const response = await user.deleteOne({_id:req.params.id})
        if(response){
            return res.status(200).send(response)
        }else{
            return res.status(400).send({Message:"No User Is Found To Delete"})
        }
       } catch (error) {
        console.log(`ERROR:${error}`);
       }
    }
// Updateing User by Id from Database
const updateUser = async(req,res)=>{
    try {
        if (!req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send({ Message: "Invalid user ID" });
        }
    
        const response = await user.updateOne(
            { _id: req.params.id },
            {
                $set: req.body && req.file ? { ...req.body, UserImage: req.file.filename } : req.body
            }
        );
    
        if (response) {
            return res.status(200).send(response);
        } else {
            return res.status(404).send({ Message: "No user found to update" });
        }
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).send({ Message: "Internal server error" });
    }
    
    
}

export {getUser,singleUser,deletingUser,updateUser}