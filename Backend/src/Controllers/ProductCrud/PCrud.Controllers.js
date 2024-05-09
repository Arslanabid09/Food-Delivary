import { Products } from "../../Models/Product.Model.js";
// import { Categorey } from "../../Models/Categorey.Models.js";

// posting new products to database
const CreateProducts = async(req,res)=>{
    try {
        if(!req.body.title || !req.body.description || !req.body.price){
            return res.status(400).send({Message:"Please fill all the fields"})
        }
        let Pimage = ''
        if(req.file){
            Pimage = req.file.filename
        }
        // const ProductcategoryIds = Promise.all(req.body.category.map(async categoryItem =>{
        //     let newCategoryItem = new Categorey({
        //         categoryNames: categoryItem.categoryNames
        //     })
        //     newCategoryItem = await newCategoryItem.save();
        //     return newCategoryItem._id;
        // }));
        // const categoryIds = await ProductcategoryIds;
        const newProduct = await new Products({
            title:req.body.title,
            description:req.body.description,
            price:req.body.price,
            category: req.body.category,
            productimage:Pimage,
        
        }).save()
        if(newProduct){
            return res.status(200).send({Message:"Product created successfully",newProduct})
        }else {
            return res.status(400).send({Message:"Something went wrong"})
        }
    } catch (error) {
        console.log(`ERROR:${error}`);
    }
}
//  getting all products from database
const getProducts = async(req,res)=>{
    try {
        const response = await Products.find().populate({path:"category",populate:"categoryNames"})
        if(response){
            return res.status(200).send(response)
        }else{
            return res.status(400).send({Message:"No Products Found"})
        }
    } catch (error) {
        console.log(`ERROR:${error}`);
    }
}
//  getting Singleuser by id from database
const singleProduct = async(req,res)=>{
    try {
        const response = await Products.findOne({_id:req.params.id}).populate({path:"category",populate:"categoryNames"})
        if(response){
            return res.status(200).send(response)
        }else{
            return res.status(400).send({Message:"No Products Found"})
        }
    } catch (error) {
        console.log(`ERROR:${error}`);
    }
}
//  deleting products by id from database
    const DeleteProduct = async(req,res)=>{
        try {
            const response = await Products.deleteOne({_id:req.params.id})
            if(response){
                return res.status(200).send(response)
            }else{
                return res.status(400).send({Message:"No Products Found To Delete"})
            }
        } catch (error) {
            console.log(`ERROR:${error}`);
        }
    }
    // updating products by id from database
    const UpdateProducts = async(req,res)=>{
        try {
            const response = await Products.updateOne({_id:req.params.id},{$set:req.body && req.file?{...req.body,productimage:req.file.filename}:req.body})
            if(response){
                return res.status(200).send(response)
            }else{
                return res.status(400).send({Message:"No Products Found To Update"})
            }
        } catch (error) {
            console.log(`ERROR:${error}`);
        }
    }


export  {CreateProducts,getProducts,singleProduct,DeleteProduct,UpdateProducts}
