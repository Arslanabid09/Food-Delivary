import express from 'express'
import { RegisterUser, loginUser, testRoute } from '../Controllers/Auth.Controller.js'
import Upload from '../MIddleware/Upload.Middleware.js'
import { verifyToken } from '../MIddleware/VerifyToken.js'


const Authrouter = express.Router()
Authrouter.post('/register',Upload.single('UserImage'),RegisterUser)
Authrouter.post('/login',loginUser)
Authrouter.get('/test',verifyToken,testRoute)

export default Authrouter