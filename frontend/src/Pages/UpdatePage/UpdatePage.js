import React, {  useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import toast from 'react-hot-toast';

const UpdatePage = () => {
  const [singleuser,setSingleuser] = useState([])
  const [name,setname] = useState('')
  const  [email,setEmail] = useState('')
   const [address,setaddress] = useState('')
   const [UserImage,setUserImage] = useState(null)
   const [imagePreview,setImagePreview] = useState('')
  const params = useParams()
  const Navigate = useNavigate()
  const getSingleUser = async()=>{
    const response = await fetch(`http://localhost:8099/api/v1/crud/singleUser/${params.id}`)
    const result = await response.json()
    setSingleuser(result)
    setname(result.name)
    setEmail(result.email)
    setaddress(result.address);
    setUserImage(`http://localhost:8099/Images/${result.UserImage}`)
  }
  useEffect(()=>{
    getSingleUser();
  },[])
  const handleImageChange = (e) => {
    setUserImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
        setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
};
// updating user 
const updateUser = async()=>{
  const formData = new FormData();
  formData.append('name',name)
  formData.append('email',email)
  formData.append('address',address)
  formData.append('UserImage',UserImage)
  const response = await fetch(`http://localhost:8099/api/v1/crud/UpdateUser/${params.id}`,{
    method:'PUT',
    body:formData
  })
  const result = await response.json()
  if(response.ok){
    Navigate('/dashboard')
    console.log(result);
    toast.success(result.Message)
  }else{
    toast.error(result.Message)
  }
}

  return (
    <>
  <div className='container w-50  border my-5 rounded'>
        <p className='text-center fw-semibold fs-2 my-2'>Update User</p>
    <form>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Enter Name</label>
    <input type="text" className="form-control fw-semibold " value={name} onChange={(e) => setname(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">Email address</label>
    <input type="email" className="form-control fw-semibold" value={email} onChange={(e) => setEmail(e.target.value)} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
                        <label className="form-label">Upload your Image</label>
                            <img src={ imagePreview || UserImage} alt="User" style={{ maxWidth: '200px', maxHeight: '200px' }}/>  <input type="file" className="form-control" onChange={handleImageChange} />
                    </div>
                    <div className="mb-3">
        <label className="form-label">Address</label>
        <textarea className="form-control" placeholder='Enter Address' rows="3" cols="50" value={address} onChange={(e)=>setaddress(e.target.value)}></textarea>
      </div> 
</form>
  <button type='submit' onClick={updateUser} className="btn btn-success w-100 fw-semibold text-white my-2">Update</button>

    </div>
    </>
  )
}

export default UpdatePage