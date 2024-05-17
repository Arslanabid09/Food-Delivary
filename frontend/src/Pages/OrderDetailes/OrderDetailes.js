import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../Context/Products';
import '../../Pages/OrderDetailes/order.css';

const OrderDetails = () => {
  const { singleOrder, getSingleOrder } = useContext(ProductContext);
  const [orderCategories, setOrderCategories] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('users')));
  }, []);

  useEffect(() => {
    getSingleOrder();
    if (singleOrder.length > 0) {
      const groupedOrders = singleOrder.reduce((acc, order) => {
        const date = order.orderDate.split('T')[0];
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(order);
        return acc;
      }, {});
      setOrderCategories(groupedOrders);
    } else {
      setOrderCategories({});
    }
  }, [singleOrder]);

  return (
    <div className='container'>
      <h1 className='text-center mt-5'>Your Order History</h1>
      {singleOrder.length === 0 ? (
        <div className='no-orders-message'>
          <h2 className='fw-semibold fs-3 mt-2'>No Orders Found</h2>
          <p className='text-center'>You have not placed any orders yet.</p>
        </div>
      ) : (
       
        
        Object.keys(orderCategories).map(date => (
          <div key={date}>
            <h2 className='fw-semibold fs-3 mt-2'>{date}</h2>
            <div className='row mt-2'>
              {orderCategories[date].map(order => (
                <div className="col-12 col-md-6 col-lg-3 mt-4" key={order._id}>
                  <div className='bg-white' style={{ width: "18rem" }}>
                    <div className='order-details border p-2'>
                      <h6 className='text-center'>Order Details</h6>
                      <hr />
                      <p>Customer: {order.customer.name}</p>
                      <p>Food Item: {order.orderItems.productId.title}</p>
                      <p>Quantity: {order.orderItems.quantity}</p>
                      <p>Total Price: {order.price} Rs</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr className='mt-3' />
          </div>
        ))
      )}
    </div>
  );
};

export default OrderDetails;
