import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import  Layout from './Layout'
import {
  Home,
  Register,Login,Dashboard,Unauthoraized,Card
  ,CreateProducts,UpdatePage,ProtectedRoutes,
  About,NotFound,Loading,SingleProduct,}
 from '../src/indexx';
import { UserProvider } from './Context/users';
import { ProductProvider } from './Context/Products';
import OrderDetailes from './Pages/OrderDetailes/OrderDetailes';
const role = {
  user:0,
  admin:1,
}
const  router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>  
      {/* Public Routes */}
       <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/menupage' element={<Card/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='menupage/singleproduct/:id' element={<SingleProduct/>}/>
      <Route path='singleproduct/:id' element={<SingleProduct/>}/>
      <Route path='/orderDetailes' element={<OrderDetailes/>}/>
  {/* Protected Routes */}
      <Route element={<ProtectedRoutes allowRoles={[role.admin]}/>}>
  <Route path='/createProduct' element={<CreateProducts/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard/:id' element={<UpdatePage/>}/>
      </Route>
    </Route>
    <Route path='/loading' element={<Loading/>}/>
<Route path='/unauthorized' element={<Unauthoraized/>}/>
      <Route path='*' element={<NotFound/>}/>
    </React.Fragment>

  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
    <RouterProvider router={router}/>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
);
reportWebVitals();
