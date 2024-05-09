import express from 'express'
import { deletingUser, getUser, singleUser, updateUser } from '../Controllers/crud.controller.js'
import Upload from '../MIddleware/Upload.Middleware.js'
const crudRoute = express.Router()

crudRoute.get('/getuser',getUser)
crudRoute.get('/singleUser/:id',singleUser)
crudRoute.delete('/deleteuser/:id',deletingUser)
crudRoute.put('/UpdateUser/:id',Upload.single('UserImage'),updateUser)

export default crudRoute;