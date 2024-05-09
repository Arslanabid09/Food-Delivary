import { createContext,useEffect,useState } from "react";
import Loading from "../component/Loading/Loading";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        const Timer = setTimeout(()=>{
            setIsLoading(false)
        })
    })
    // getting all products from database
    const getProducts = async () => {
        try {
            const response = await fetch("http://localhost:8099/api/v1/ProductCrud/getproducts")
            const result = await response.json();
            setProducts(result);
            if(!products) {
                return <div><Loading/></div>
            }
        } catch (error) {
            console.log(`ERROR:${error}`);

        }
    }
    return (
        <ProductContext.Provider value={{products,getProducts }}>
            {children}
        </ProductContext.Provider>
    );
}
