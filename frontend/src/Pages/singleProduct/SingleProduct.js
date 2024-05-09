import React, { useContext, useEffect, useState } from 'react'
import '../../component/Cards/Card.css'
import {useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
const SingleProduct = () => {
    const user = JSON.parse(localStorage.getItem('users'))
    console.log(user);
    const [products,setProducts] = useState([])
    const [quantity,setQuantity] = useState(1)
    const params = useParams();

    const handleOrderNow = async () => {
        try {
            const response = await fetch('http://localhost:8099/api/v1/ProductOrders/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customer: user._id,
                    orderItems:[{
                        productId: products._id,
                        quantity: quantity
                    }],
                    price: products.price * quantity, // Calculate total price based on quantity
                    address: user.address, // Example address
                    status: "Pending",
                    orderDate: new Date().toISOString()
                }),

            });
    
            const result = await response.json();
            if (response.ok) {
            toast.success(result.Message);
            } else {
                toast.error(result.Message);
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };




    const SingleProduct = async()=>{
        const response = await fetch(`http://localhost:8099/api/v1/ProductCrud/singleProduct/${params.id}`)
        const result = await response.json();
        setProducts(result);
        console.log(products);
    }
    useEffect(()=>{
        SingleProduct()
    },[])
  return (
    <>
    <div className='container '>
        <div className='row '>
            <div className='col-lg-8 col-md-12 col-sm-12'>
                <div><img src={`http://localhost:8099/Images/${products.productimage}`} className='w-100' alt=""/>
                </div>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                    <div className=''>
                        <h1 className='w-100' style={{marginTop:"11rem",fontSize:"3rem",fontWeight:"900"}}>{products.title}</h1>
                        <h1 className='fs-6 fw-light'>{products.description}</h1>
                        <div className=''>
                <button onClick={()=>setQuantity(quantity+1)} className='btn btn-danger  mx-2'>+</button>
                {quantity}
                <button onClick={()=> {if(quantity>1){setQuantity(quantity-1)}}} className='btn btn-danger mx-2'>-</button>
                </div>
                        <button onClick={handleOrderNow} className='btn btn-danger mt-3 mx-2 w-75'>({products.price*quantity}.rs) Order Now</button>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default SingleProduct