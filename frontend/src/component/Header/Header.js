import React from 'react';
import { Link} from 'react-router-dom';
import UserProfile from '../../Pages/UserProfile/UserProfile';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // Retrieve user data from localStorage and parse it as JSON
  const isLogin = JSON.parse(localStorage.getItem('users'));
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:"black"}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white fw-bold fs-2" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLogin && isLogin.role === 1 ? 
                <li className="nav-item">
                  <Link className="nav-link text-white fw-semibold" to="/dashboard">Dashboard</Link>
                </li>
               :
              <li className="nav-item">
                <Link className="nav-link active text-white fw-semibold mx-2" aria-current="page" to="/">Home</Link>
              </li>
              
              }
           {  isLogin && isLogin.role === 1 ? 
            <li className="nav-item">
            <Link className="nav-link active text-white fw-semibold mx-2" aria-current="page" to="/dashboard/createfoodItem">Add Food Items</Link>
          </li>
           :  <li className="nav-item">
                  <Link className="nav-link text-white fw-semibold" to="/about">About Our Food</Link>
                </li>}
             { isLogin && isLogin.role === 1 ? <li className="nav-item">
                  <Link className="nav-link text-white fw-semibold" to="/dashboard/orders">Order Detailes</Link>
                </li> : <li className="nav-item">
                  <Link className="nav-link text-white fw-semibold" to="/menupage">Our Menu</Link>
                </li>}
            </ul>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {isLogin && !isLogin.role == 1? 
            <li className="nav-item">
                <Link className="btn btn-danger text-light fw-semibold mx-2 btn-sm" to="/orderdetailes">Order History</Link>
              </li>:
              null}
              <li>
                {isLogin ?
                   <button onClick={()=>{localStorage.removeItem('users');  toast.success('Logout Successfully');navigate('/login');
                   }} className="btn btn-danger text-light fw-semibold mx-2 btn-sm" >LogOut</button>
                   :
                  <Link to='/login' type="button" className="btn btn-dark text-light fw-semibold my-1 mx-2  btn-sm">Login</Link>}
              </li>
              <li>
                {isLogin ?
                  <span className='my-2'><UserProfile /></span> :
                  <Link to='/register' type="button" className="btn btn-dark btn-sm mx-2 my-1  fw-semibold">Sign up</Link>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
