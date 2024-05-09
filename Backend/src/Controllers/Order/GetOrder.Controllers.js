import { Orders } from "../../Models/Order.Model.js";
import { Orderitems } from "../../Models/Orderitems.Models.js";


// getting  all orders from database
const getAllOrders = async (req, res) => {
 try {
  const orderList = await Orders.find().populate("customer","name").populate({path:"orderItems",populate:"productId",}).sort({"orderDate":-1});
 if(!orderList){
  return res.status(400).send({Message:"No Orders Found"})
 } else{
  return res.status(200).send(orderList)
 }
 } catch (error) {
  console.log(`ERROR:${error}`);
 }
};
// getting SingleOrder by id from Database
const getSingleOrders = async (req, res) => {
  try {
   const orderList = await Orders.findById({_id:req.params.id}).populate("customer","name").populate({path:"orderItems",populate:"productId",}).sort({"orderDate":-1});
  if(!orderList){
   return res.status(400).send({Message:"No Orders Found"})
  } else{
   return res.status(200).send(orderList)
  }
  } catch (error) {
   console.log(`ERROR:${error}`);
  }
 };
export { getAllOrders,getSingleOrders };
