import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')

    const Navigate =useNavigate()

    const LoginUser = async()=>{
        const response = await fetch('http://localhost:8099/api/v1/auth/login',{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const result = await response.json()
        console.log(result);
        localStorage.setItem('users',JSON.stringify(result))
        if(response.ok){
            toast.success(result.Message)
            Navigate('/')

        }else{
            toast.error(result.Message)
        }
    }
  return (
    <>
     <div className="container-fluid w-100  mt-5">
  <div className="row justify-content-center">
    <div className="col-lg-6 col-md-6 col-sm-9 col-xs-6">
      <div className="card-group mb-0">
        <div className="card ">
          <div className="card-body">
            <h1 className='fw-semibold fs-2 text-center'>Sign In</h1>
            <div className="input-group mb-3">
       <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input
  type="email"
  name="email"
  className="form-control"
  placeholder="Enter Email"
  id="exampleInputEmail1"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  title="Please enter a valid email address"
  required // This makes the field required
/>

    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control outline-none" placeholder='Enter Password'  id="exampleInputPassword1" value={password} onChange={(e) => setpassword(e.target.value)}  autoComplete="current-password" />
  </div>
</form>
            </div>
            
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <button type="button" onClick={LoginUser} className="btn btn-success px-4">Login</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card1 text-white py-5" style={{width: '44%'}}>
  <div className="card-body text-center">
    <div className='cardbg'>
      <h2>New To GoFood</h2>
      <Link to='/register' type="button" className="btn btn-success active mt-3">Register Now!</Link>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</div>
    </>

  )
}

export default Login