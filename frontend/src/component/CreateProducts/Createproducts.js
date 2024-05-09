import React, { useState } from 'react';
import toast from 'react-hot-toast';

const CreateProducts = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [productimage, setProductImage] = useState(null);

  const createProduct = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('ProductImage', productimage);

        const response = await fetch('http://localhost:8099/api/v1/ProductCrud/Products', {
            method: 'POST',    
            body: formData
        });
        const result = await response.json();
        if (response.ok) {
            toast.success(result.Message);
            setTitle('');
            setDescription('');
            setPrice('');
            setCategory('');
            setProductImage(null);
        } else {
            toast.error(result.Message);
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while creating the product');
    }
};

  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-9 col-sm-9">
          <div className="card-group mb-0">
            <div className="card p-4">
              <div className="card-body"> 
                <h1 className='fw-semibold fs-2 text-center fw-semibold text-info'>Add Product</h1>
                <div className="input-group mb-3">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleName1" className="form-label fw-semibold">Enter Title</label>
                      <input type="text" className="form-control" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Enter Price</label>
                      <input type="text" className="form-control" placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Enter Category</label>
                      <input type="text" className="form-control" placeholder='Enter Category' value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Upload your Image</label>
                      <input type="file" className="form-control" onChange={(e) => { setProductImage(e.target.files[0]) }} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">Enter Description</label>
                      <textarea className="form-control" placeholder='Description..!' value={description} onChange={(e) => setDescription(e.target.value)} rows="3" cols={40} />
                    </div>
                  </form>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-5 col-sm-12">
                    <button type="button" onClick={createProduct} className="btn btn-danger px-4">Add Product</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card1 text-white bg-success py-5 d-md-down-none" style={{ width: '44%' }}>
              <div className="card-body text-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
