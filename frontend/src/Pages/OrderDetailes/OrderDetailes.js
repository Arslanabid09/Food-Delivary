import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../Context/Products';
import '../../Pages/OrderDetailes/order.css';
const OrderDetails = () => {
  const { singleOrder} = useContext(ProductContext);
  const [orderCategories, setOrderCategories] = useState([]);
  const user = JSON.parse(localStorage.getItem('users'))
  
  useEffect(() => {
    const categories = groupedOrderBydate();
      setOrderCategories(categories);
    },[singleOrder],[user.name]);

  const groupedOrderBydate = () => {
    const orderCategories = {};
    singleOrder.forEach(order => {
      const date = order.orderDate.split('T')[0];
      if (!orderCategories[date]) {
        orderCategories[date] = [];
      }
      orderCategories[date].push(order);
    });
    return orderCategories;
  };

  return (
    <>
  {Object.keys(orderCategories).length>0 ? <div className='container'>
  {Object.keys(orderCategories).map(date => (
    <div key={date}>
      <h2 className=' fw-semibold fs-3 mt-2'>{date}</h2>
      <div className='row mt-2'>
        {orderCategories[date].map(order => (
          <div className="col-12 col-md-6 col-lg-3 mt-4 " key={order._id}>
            <div className=' bg-white' style={{width:"18rem"}}>
              <div className=' '>
                <div className='order-details border p-2 '>
                  <h6 className='text-center'>Order Details</h6>
                  <hr/>
                  <p>Customer: {order.customer.name}</p>
                  <p className=''>Food Item: {order.orderItems.productId.title}</p>
                  <p className=''>Quantity:{order.orderItems.quantity}</p>
                  <p className=''>Total Price:{order.price}Rs</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <hr className='mt-3'></hr>
      </div>
    </div>
  ))}
</div>:<h1 className='text-center' >No Order Found</h1>}




    </>



  );
};

export default OrderDetails;
