import React from 'react'
import '../../component/Carasoul/Carasoul.css'
import Pic1 from '../../Images/carasoul1.png'
import Pic2 from '../../Images/carasoul2.jpg'
import Pic3 from '../../Images/carasoul3.jpg'
import Pic4 from '../../Images/carasoul4.png'
import Pic5 from '../../Images/carasoul5.jpg'

const Carasoul = () => {
  return (
   <>
   <div className='Carasoul'>
   <div className="slider2">
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval={500}>
        <img src={Pic1} className="Carasoulpic d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-bs-interval={500}>
        <img src={Pic2} className="Carasoulpic d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={Pic3} className="Carasoulpic d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={Pic4} className="Carasoulpic d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={Pic5} className="Carasoulpic d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev btn-sm" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="me-auto mx-2 fs-6 carousel-control-prev-icon bg-danger rounded p-3 btn btn-sm  outline-none" aria-hidden="true" />
      <span className="visually-hidden ">Previous</span>
    </button>
    <button className="carousel-control-next ms-auto" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="ms-auto mx-2 fs-6 carousel-control-next-icon icon-sm bg-danger rounded p-3 btn btn-sm  outline-none" aria-hidden="true" />
      <span className="visually-hidden "></span>
    </button>
  </div>
</div>

   </div>

   {/* <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carasoul'>
  <div className='carousel-caption' style={{zIndex:"10"}}>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item">
      <img src={Pic1} className="d-block w-100 " alt="..."  style={{filter:"Brightness(40%)"}}/>
    </div>
    <div className="carousel-item">
      <img src={Pic2} className="d-block w-100 " alt="..."  style={{filter:"Brightness(40%)"}}/>
    </div>
    <div className="carousel-item">
      <img src={Pic3} className="d-block w-100 " alt="..."  style={{filter:"Brightness(40%)"}}/>
    </div>
    <div className="carousel-item">
      <img src={Pic4} className="d-block w-100 " alt="..."  style={{filter:"Brightness(40%)"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

   </>
  )
}

export default Carasoul