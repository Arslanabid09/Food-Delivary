import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../Context/Products';
import '../../component/Cards/Card.css';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);


  const groupProductsByCategory = () => {
    const groupedProducts = {};
    products.forEach((product) => {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
      }
      groupedProducts[product.category].push(product);
    });
    return groupedProducts;
  };

  const groupedProducts = groupProductsByCategory();
  const categoriesToShow = Object.keys(groupedProducts).filter((category) => category == 'Happy Meals Menu' || category == 'Top Meals');

  return (
    <div className='container mt-5'>
      {categoriesToShow.map((category) => (
        <div key={category}>
          <h2 className='mt-5 fw-semibold fs-1'>{category}</h2>
          <div className='row mt-2'>
            {groupedProducts[category].map((product) => (
              <div className="col-12 col-md-6 col-lg-3" key={product._id}>
                <div className="procard bg-dark rounded mt-5">
                  <div className="card-img-top">
                    <img
                      src={`http://localhost:8099/Images/${product.productimage}`}
                      className="img-responsive w-100  mx-auto "
                      alt={product.title}
                      loading='lazy'
                    />
                  </div>
                  <div className="procard-body">
                    <h5 className="procard-title  text-danger">{product.title.slice(0, 20)}..!</h5>
                    <p className="procard-text text-light">{product.description.slice(0, 35)}...!</p>
                    <p className="procard-price text-danger ">{product.price}<small className='text-light'>.Rs</small></p>
                    <Link to={`menupage/singleproduct/${product._id}`} className="btn btn-danger text-light add-to-cart  p-2 rounded border-0  btn-sm  w-100">Order Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
