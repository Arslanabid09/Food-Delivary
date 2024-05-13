import React, { useContext, useEffect, useState } from 'react'
import '../../component/Cards/Card.css'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const SingleProduct = () => {
  const user = JSON.parse(localStorage.getItem('users'))
  const [products, setProducts] = useState([])
  const [quantity, setQuantity] = useState(1)
  const params = useParams();
  // States for order Data
  const [selectedCity, setSelectedCity] = useState('');
  const [selectArea, setSelectArea] = useState('')
  const [selectSubArea, setSelectSubArea] = useState('')
  const [selectStreetName, setSelectStreetName] = useState('')
  const [selectContectNumber, setSelectContactNumber] = useState('')

  const Navigate = useNavigate()
  
  // handling orders
  const handleOrderNow = async () => {
    try {
      if (!user) {
        Navigate('/login')
        toast.error("Please login to order")
      } else {
        const response = await fetch('http://localhost:8099/api/v1/ProductOrders/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            customer: user._id,
            orderItems: [{
              productId: products._id,
              quantity: quantity
            }],
            price: products.price * quantity, 
            City: selectedCity,
            Area: selectArea,
            subArea: selectSubArea,
            streetName: selectStreetName,
            ContectNumber: selectContectNumber,
            orderDate: new Date().toISOString()
          }),
        });
        const result = await response.json();
        if (response.ok) {
          toast.success(result.Message);
        } else {
          toast.error(result.Message);
        }
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const SingleProduct = async () => {
    const response = await fetch(`http://localhost:8099/api/v1/ProductCrud/singleProduct/${params.id}`)
    const result = await response.json();
    setProducts(result);
  }
  useEffect(() => {
    SingleProduct()
  }, [])

  // Options for city, area, and sub-area
  const cityOptions = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad'];
  const karachiAreas = ['Gulshan', 'Nazimabad', 'Clifton', 'DHA', 'Saddar'];
  const lahoreAreas = ['Gulberg', 'Johar Town', 'Model Town', 'Cantt', 'DHA'];
  const islamabadAreas = ['G-8', 'G-9', 'F-10', 'F-11', 'E-11'];
  const rawalpindiAreas = ['Saddar'];
  const subAreas = {
    Gulshan: ['Block 1', 'Block 2', 'Block 3', 'Block 4', 'Block 5'],
    Nazimabad: ['Block A', 'Block B', 'Block C', 'Block D', 'Block E'],
    Clifton: ['Block 1', 'Block 2', 'Block 3', 'Block 4', 'Block 5'],
    DHA: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5'],
    Saddar: ['KDA Market', 'Empress Market', 'Hyderi Market', 'Bolton Market', 'Zainab Market']
  };

  return (
    <>
      <div className='container '>
        <div className='row'>
            <div className='col-lg-8 col-md-12 col-sm-12'>
                <div><img src={`http://localhost:8099/Images/${products.productimage}`} className='w-100' alt=""/>
                </div>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                    <div className=''>
                        <h1 className='w-100' style={{marginTop:"11rem",fontSize:"3rem",fontWeight:"900"}}>{products.title}</h1>
                        <h1 className='fs-6 fw-light'>{products.description}</h1>
                        <div>
                <button onClick={()=>setQuantity(quantity+1)} className='btn btn-danger  mx-2'>+</button>
                {quantity}
                <button onClick={()=> {if(quantity>1){setQuantity(quantity-1)}}} className='btn btn-danger mx-2'>-</button>
                </div>
                        <button onClick={handleOrderNow} className='btn btn-danger mt-3 mx-2 w-75'>({products.price*quantity}.rs) Order Now</button>
                    </div>
                </div>
        </div>
    </div>
      <div className='container mt-5'>
        <h2 className='text-warning mx-5'>DELIVERY ADDRESS</h2>
        <small className='text-secondary mx-5'>All Fields Are Required</small>
        <p>Please submit your Delivery Address to check if it's located within the McDelivery area.</p>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <label htmlFor="citySelect" className="form-label">*City</label>
            <select
              id="citySelect"
              className="form-select h-100 "
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              required
            >
              <option value="">Select City</option>
              {cityOptions.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <label htmlFor="areaSelect" className="form-label">*Area</label>
            <select
              id="areaSelect"
              className="form-select h-100 "
              value={selectArea}
              onChange={(e) => setSelectArea(e.target.value)}
              required
            >
              <option value="">Select Area</option>
              {selectedCity && (selectedCity === 'Karachi' ? karachiAreas : 
                selectedCity === 'Lahore' ? lahoreAreas : 
                selectedCity === 'Islamabad' ? islamabadAreas :selectedCity === 'Rawalpindi' ? rawalpindiAreas: []).map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
            </select>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <label htmlFor="subAreaSelect" className="form-label">*Sub-Area</label>
            <select
              id="subAreaSelect"
              className="form-select h-100"
              value={selectSubArea}
              onChange={(e) => setSelectSubArea(e.target.value)}
              required
            >
              <option value="">Select Sub-Area</option>
              {selectArea && subAreas[selectArea] && subAreas[selectArea].map(subArea => (
                <option key={subArea} value={subArea}>{subArea}</option>
              ))}
            </select>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <label htmlFor="streetInput" className="form-label">*Street</label>
            <input type='text' className='form-control h-100' id="streetInput" value={selectStreetName} onChange={(e) => setSelectStreetName(e.target.value)} required />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <label htmlFor="contactNumberInput" className="form-label">*Contact no.</label>
            <input type='number' className='form-control h-100' id="contactNumberInput" value={selectContectNumber} onChange={(e) => setSelectContactNumber(e.target.value)} required />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <button className='btn btn-warning mt-5 fs-3 h-75 w-100' onClick={handleOrderNow}>Order Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct;
