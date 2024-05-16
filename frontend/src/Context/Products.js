import { createContext,useEffect,useState } from "react";
import Loading from "../component/Loading/Loading";
 import useParams from 'react-router-dom';

export const ProductContext = createContext();

const user = JSON.parse(localStorage.getItem('users'))

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [Order,setOrder] = useState([])
    const [singleOrder,setSingleOrder] = useState([]);
    // getting all products from database
    const getProducts = async () => {
        try {
            const response = await fetch("http://localhost:8099/api/v1/ProductCrud/getproducts")
            const result = await response.json();
            setProducts(result);
        } catch (error) {
            console.log(`ERROR:${error}`);

        }
    }
    // getting orders 
    const getOrders = async()=>{
        const response = await fetch("http://localhost:8099/api/v1/ProductOrders/getallorder")
        const result = await response.json();
        setOrder(result);
    }
    const getSingleOrder = async()=>{
        const userId = user._id
        const response = await fetch(`http://localhost:8099/api/v1/ProductOrders/getsingleorder/${userId}`)
        const result = await response.json();
        setSingleOrder(result);
    }
    return (
        <ProductContext.Provider value={{products,getProducts,getOrders,Order,setOrder,getSingleOrder,singleOrder,setSingleOrder }}>
            {children}
        </ProductContext.Provider>
    );
}
