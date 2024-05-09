import React from 'react'
import UserDetailes from '../../component/UsersDetailes/UserDetailes'
const Dashboard = () => {
  return (
    <div className='container'>
      <h1 className='mt-4'>Dashboard</h1>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
      <UserDetailes/>
        </div>
 
      </div>
    </div>
  )
}

export default Dashboard