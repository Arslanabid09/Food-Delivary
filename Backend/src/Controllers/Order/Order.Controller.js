import { Orders } from "../../Models/Order.Model.js";
import { Orderitems } from "../../Models/Orderitems.Models.js";


const orderDetailes = async(req,res)=>{
    try {
        const orderItemIds = Promise.all( req.body.orderItems.map(async orderItem =>{
            let newOrderItem = new Orderitems({
                productId:orderItem.productId,
                quantity:orderItem.quantity
            })
            newOrderItem = await newOrderItem.save();
            return  newOrderItem._id
        }))
        const orderids = await orderItemIds
        
        const newOrder = await new Orders({
            customer:req.body.customer,
            orderItems:orderids,
            price:req.body.price,
            address:req.body.address,
            status:req.body.status,
            orderDate:req.body.orderDate
        }).save()
        if(newOrder){
            return res.status(200).send({Message:"Order Placed successfully",newOrder})
        }else{
            return res.status(400).send({Message:"Something went wrong"})
        }
    } catch (error) {
    console.log(`ERROR:${error}`);
    }
}

export {orderDetailes}