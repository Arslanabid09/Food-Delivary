import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../Context/Products'
import ViewOrder from './viewOrder'
import { Link } from 'react-router-dom'

const AllOrders = () => {
    const {getOrders,Order} = useContext(ProductContext)
    const formatDate = (date) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("en-US", options);
        
      }

    useEffect(() => {
        getOrders();
    }, [])
    console.log(Order);
  return (
        <>
<div className="container ">
  <h1 className='text-center mt-5 '>Order Management</h1>
  <table className="table table-striped mt-4">
    <thead>
      <tr>
        <th scope="col">Customer</th>
        <th scope="col">City</th>
        <th scope="col">Area</th>
        <th scope="col">Sub-Area</th>
        <th scope="col">Street-Name</th>
        <th scope="col">Contact.No</th>
        <th scope="col">Date</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody id="order-list">
        { Order && Order.map((order) =>{
            return(
                <>
                <tr>
                    <td>{order.customer.name}</td>
                    <td>{order.City}</td>
                    <td>{order.Area}</td>
                    <td>{order.subArea}</td>
                    <td>{order.streetName}</td>
                    <td>{order.ContectNumber}</td>
                    <td>{formatDate(order.orderDate)}</td>
                    <td>
                        <Link className='btn btn-info' to={`/dashboard/orders/${order._id}`}>View Order</Link>
                    </td>
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

export default AllOrders