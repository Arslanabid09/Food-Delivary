import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="py-5 my-auto mt-5 bg-body-secondary">
  <ul className="nav justify-content-center border-bottom pb-3  mb-3">
    <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
    <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Features</Link></li>
    <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Pricing</Link></li>
    <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
    <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">About</Link></li>
  </ul>
  <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
</footer>

    </>
  )
}

export default Footer