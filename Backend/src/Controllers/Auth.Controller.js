import { user } from "../Models/User.Model.js";
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const RegisterUser = async(req,res)=>{
    try {
        const {name,email,password,address,role,createDate} = req.body
        if(!name || !email || !password || !address){
            return res.status(400).send({Message:"Please fill all the fields"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).send({Message:"Please Enter Valid Email"})
        }
        const userExist = await user.findOne({email})
          if(userExist){
            return res.status(400).send({Message:"User already exist"})
        }
        const hash = await bcrypt.hash(password,10)
        let userImage = '';
        if(req.file){
            userImage = req.file.filename
        }
        const newUser = await new user({
            name,
            email,
            password:hash,
            UserImage:userImage,
            address,
            role,
            createDate
        }).save()
        if(newUser){
            return res.status(200).send({Message:"User created successfully",newUser})
        }else {
            return res.status(400).send({Message:"Something went wrong"})
        }
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

    const loginUser = async(req,res)=>{
            try {
                const {email,password} = req.body
            const isCheck = await user.findOne({email})
            if(!isCheck){
                return res.status(400).send({Message:"Email Not Found"})
            }
            const ComparePassword = await bcrypt.compare(password,isCheck.password)
            if(!ComparePassword){
                return res.status(400).send({Message:"No User Found"})
            }
            const token = jwt.sign({id:isCheck._id,role:isCheck.role}, process.env.Secret_Key,{expiresIn:"24h"})   
            if(token){
                return res.status(200).send({ _id:isCheck._id,createdDate:isCheck.createDate, name:isCheck.name,email:isCheck.email,address:isCheck.address,UserImage:isCheck.UserImage,token:token,role:isCheck.role, Message:"User Logged in Successfully"})
            }else{
                return res.status(400).send({Message:"Login First"})
            }
            } catch (error) {
                console.log(`ERROR:${error}`);
            }
            
    }

    const testRoute = (req,res)=>{
        try {
        return res.status(200).send({Message:"Hello World"})
        } catch (error) {
            console.log(`ERROR:${error}`);
        }
    }

export {RegisterUser,loginUser,testRoute}