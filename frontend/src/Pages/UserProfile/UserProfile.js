import React from 'react'
import { Link} from 'react-router-dom'
const UserProfile = () => {
    const isLogin = localStorage.getItem('users')
    const userInfo = isLogin? JSON.parse(isLogin):null

    return (
    <div>
    {/* Button trigger modal */}
    <Link type="button" className="" style={{outline:'none !important',border:'none !important'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
    {userInfo.UserImage?
     <img className='rounded-circle img-responsive' style={{width:'45px',height:'45px'}} src={`http://localhost:8099/Images/${userInfo.UserImage}`} alt="userProfile" />
     :
     <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className='rounded-circle'  style={{width:'45px',height:'45px'}} alt="User" /> 
    }
     </Link>
    {/* Modal */}
    <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content h-50">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">User Profile</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
          <div className=" col-lg-12 col-md-8">
          <div className="model mb-3 border-start">
            <div className="model-body border-0 h-25" >
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="admin-info  mb-0 mx-2 fw-semibold text-dark">Full Name:</h6>
                </div>
                <div className="col-sm-9 admin-info text-capitalize  text-secondary">
                  {userInfo.name}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="admin-info  mb-0 mx-2 fw-semibold text-dark">Email:</h6>
                </div>
                <div className="col-sm-9 admin-info text-capitalize  text-secondary">
                 {userInfo.email}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0 admin-info mx-2 fw-semibold text-dark">Address:</h6>
                </div>
                <div className="col-sm-9 admin-info text-capitalize text-secondary">
                {userInfo.address}
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default UserProfile