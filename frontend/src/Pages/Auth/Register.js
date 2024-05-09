import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import '../../Pages/Auth/Register.css'
const Register = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [UserImage,setUserImage] = useState(null)
    const [address,setaddress] =useState('')
    const [role,setRole] = useState(0)
    const [key,setkey] = useState('')

      const RegisterUser = async()=>{
        const formData =  new FormData()
        formData.append('name',name)
        formData.append('email',email)
        formData.append('password',password)
        formData.append('UserImage',UserImage)
        formData.append('address',address)
        formData.append('role',role)
          const response = await fetch("http://localhost:8099/api/v1/auth/register",{
          method:"POST",
          body:formData 
        })
        const result = await response.json()
        console.log(result);
        if(response.ok){
          toast.success(result.Message)
          setName('')
          setEmail('')
          setPassword('')
          setUserImage(null)
          setaddress('')
          setkey('')
        }else{
          toast.error(result.Message)
        }
      }
   
  return (
    <>
    <div className="container mt-5 ">
    <div className="row justify-content-center">
      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
        <div className="card-group mb-0">
          <div className="card p-4">
            <div className="card-body">
              <h1 className='fw-semibold fs-2 text-center'>Sign Up</h1>
              <div className="input-group mb-3">
         <form>
         <div className="mb-3">
      <label htmlFor="examplename1" className="form-label">Enter Name</label>
      <input type="text" className="form-control" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}  />
    </div>
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
      <label className="form-label">Upload your Image</label>
      <input type="file" className="form-control" onChange={(e)=>{setUserImage(e.target.files[0])}} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control outline-none" placeholder='Enter Password'  id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Address</label>
        <textarea className="form-control" placeholder='Enter Address' rows="3" cols="50" value={address} onChange={(e)=>setaddress(e.target.value)}></textarea>
      </div> 
       <button type="button" onClick={RegisterUser} className="btn btn-success px-4 ">Sign Up</button>     
  </form>

              </div>
             
            </div>
          </div>
          <div className="card1 text-white  py-5 d-md-down-none" style={{width: '44%'}}>
    <div className="card-body text-center">
      <div>
        <h2>Already has an Account?</h2>
        <Link to='/login' type="button" className="btn btn-primary active mt-3">Login Now!</Link>
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

export default Register