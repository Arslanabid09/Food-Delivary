import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../Context/Products'
import { Link } from 'react-router-dom'

const ViewOrder = () => {
    const {singleOrder,getSingleOrder} = useContext(ProductContext)
    useEffect(()=>{
        getSingleOrder();
    },[])
    const formatDate = (date) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("en-US", options);
        
      }
  return (
   <>
    <div className="container">
  <h1 className='text-center mt-5 '>Order Management</h1>
  <table className="table table-striped mt-4">
    <thead>
      <tr>
        <th scope="col">Food Item</th>
        <th scope="col">Category</th>
        <th scope="col">Quantity</th>
        <th scope="col">Price</th>
        <th scope="col">Date</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody id="order-list">
        {singleOrder && singleOrder.map((order) =>{
            return(
                <>
                <tr>
                    <td>{order.orderItems.productId.title}</td>
                    <td>{order.orderItems.productId.category}</td>
                    <td>{order.orderItems.quantity}</td>
                    <td>{order.orderItems.productId.price}</td>
                    <td>{formatDate(order.orderDate)}</td>
                    <td><Link className='btn btn-info' to='/dashboard/orders'>GO Back</Link></td>
                </tr>
                </>
            )
        } )}
    </tbody>
  </table>
</div>



   </>
  )
}

export default ViewOrder