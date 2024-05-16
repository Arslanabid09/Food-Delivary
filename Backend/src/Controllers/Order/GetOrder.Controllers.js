import { Orders } from "../../Models/Order.Model.js";


// getting  all orders from database
const getAllOrders = async (req, res) => {
 try {
  const orderList = await Orders.find().populate("customer","name").populate({path:"orderItems",populate:"productId",}).sort({"orderDate":-1});
 if(orderList){
   return res.status(200).send(orderList)
  } else{
    return res.status(400).send({Message:"No Orders Found"})
  }
 } catch (error) {
  console.log(`ERROR:${error}`);
 }
};
// getting SingleOrder by id from Database
const getSingleOrders = async (req, res) => {
  try {
    // Assuming user ID is passed in the request parameters
    const userId = req.params.id;

    // Find orders where the customer field matches the user ID
    const orderList = await Orders.find({ 'customer': userId }).sort({"orderDate":-1})
      .populate("customer", "name")
      .populate({ path: "orderItems", populate: "productId" })
      .sort({ "orderDate": -1 });

    if (orderList){
      return res.status(200).send(orderList);
    }
  } catch (error) {
    console.log(`ERROR:${error}`);
    return res.status(500).send({ Message: "Internal Server Error" });
  }
};

export { getAllOrders,getSingleOrders };
