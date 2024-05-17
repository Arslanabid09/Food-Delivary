import React,{Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { UserProvider } from './Context/users';
import { ProductProvider } from './Context/Products';
import Loading from './component/Loading/Loading';


// Lazy-loaded components
import { Home,Register,Login,Card,About,SingleProduct,OrderDetailes,AllOrders,ViewOrder,CreateProducts,Dashboard,UpdatePage,Unauthoraized,ProtectedRoutes,NotFound } from './indexx';
const role = {
  user: 0,
  admin: 1,
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      {/* Public Routes */}
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menupage' element={<Card />} />
        <Route path='/about' element={<About />} />
        <Route path='menupage/singleproduct/:id' element={<SingleProduct />} />
        <Route path='singleproduct/:id' element={<SingleProduct />} />
        <Route path='/orderDetailes' element={<OrderDetailes />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes allowRoles={[role.admin]} />}>
          <Route path='/dashboard/orders' element={<AllOrders />} />
          <Route path='/dashboard/orders/:id' element={<ViewOrder />} />
          <Route path='/dashboard/createfoodItem' element={<CreateProducts />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/:id' element={<UpdatePage />} />
        </Route>
      </Route>
      <Route path='/unauthorized' element={<Unauthoraized />} />
      <Route path='*' element={<NotFound />} />
    </React.Fragment>
  )
)

const FallbackLoading =()=>{
  const [showLoading,setShowLoading] = useState(true);
  useEffect(()=>{
    const Timer = setTimeout(() => {
      setShowLoading(false)
    }, 120000000000);
    return ()=> clearTimeout(Timer);
  },[])
  return showLoading? <Loading/> : null
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <Suspense fallback={<FallbackLoading/>}>
        <RouterProvider router={router} />
        </Suspense>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
);
reportWebVitals();
