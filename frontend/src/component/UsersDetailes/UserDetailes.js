import React, { useContext, useEffect } from 'react'
import '../../component/UsersDetailes/getuser.css'
import { UserContext } from '../../Context/users'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/Products'
const UserDetailes = () => {
  const {getOrders,Order} = useContext(ProductContext)
  const {user,deleteUser,getUser} = useContext(UserContext)
    console.log(user);
    const formatDate = (date) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en-US", options);
      
    }
    const HandleDelete = (id)=>{
      deleteUser(id)
    }
    useEffect(()=>{
      getUser();
      getOrders();
  },[])
  return (
    <>
<div className="container mt-4">
  <div className="row ">
    <div className="col-xl-6 col-lg-6">
      <div className="card l-bg-cherry">
        <div className="card-statistic-3 p-4">
          <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart" /></div>
          <div className="mb-4">
            <h5 className="card-title mb-0">Orders</h5>
          </div>
          <div className="row align-items-center mb-2 d-flex">
            <div className="col-8">
              <h2 className="d-flex align-items-center mb-0">
                {Order.length}
              </h2>
            </div>
            <div className="col-4 text-right">
              <span>{Order.length/100}%<i className="fa fa-arrow-up" /></span>
            </div>
          </div>
          <div className="progress mt-1 " data-height={8} style={{height: 8}}>
            <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} style={{width: '25%'}} />
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-6 col-lg-6">
      <div className="card l-bg-blue-dark">
        <div className="card-statistic-3 p-4">
          <div className="card-icon card-icon-large"><i className="fas fa-users" /></div>
          <div className="mb-4">
            <h5 className="card-title mb-0">Customers</h5>
          </div>
          <div className="row align-items-center mb-2 d-flex">
            <div className="col-8">
              <h2 className="d-flex align-items-center mb-0">
                {user.length}
              </h2>
            </div>
            <div className="col-4 text-right">
            <span>{user.length/100} % <i className="fa fa-arrow-up" /></span>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  {user.length > 0 ?  <div>
  <div className="container rounded  mt-5 ">
    <h1>Users <span className='text-info'>({user.length})</span></h1>
  <hr />
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="main-box no-header clearfix">
          <div className="main-box-body clearfix">
            <div className="table-responsive">
              <table className="table user-list">
                <thead>
                  <tr>
                    <th><span>User</span></th>
                    <th><span>Created</span></th>
                    <th><span>Email</span></th>
                    <th><span>Address</span></th>
                    <th><span>Actions</span></th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody className='col-lg-12 col-md-6 col-sm-6'>
                  {user.map((item)=>{
                    return(
                      <tr key={item._id}>
                    <td>
                      {item.UserImage? <img src={`http://localhost:8099/Images/${item.UserImage}`} alt="User" />:<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="User" />
                        }
                      <p className="user-link">{item.name}</p>
                    </td>
                    <td>{formatDate(item.createdAt)}</td>
                    <td>
                      <p href="#">{item.email}</p>
                    </td>
                    <td>
                      <p href="#">{item.address}</p>
                    </td>
                    <td style={{width: '20%'}}>
                      <Link to={`/dashboard/${item._id}`} className="table-link text-info">
                         <span className="fa-stack mx-3">
                          <i className="fa fa-square fa-stack-2x" />
                          <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                        </span>
                      </Link>
                      <button onClick={()=>HandleDelete(item._id)} className=" btn table-link danger">
                        <span className="fa-stack">
                          <i className="fa fa-square fa-stack-2x" />
                          <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                        </span>
                      </button>
                    </td>
                  </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>: <div className='text-center mt-5 fw-bold fs-1'>No user Found</div>}
    </>
  )
}

export default UserDetailes