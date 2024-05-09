import express from 'express';
import Upload from '../../MIddleware/Upload.Middleware.js';
import {CreateProducts,getProducts,singleProduct,DeleteProduct,UpdateProducts} from '../../Controllers/ProductCrud/PCrud.Controllers.js'


const pCrudRoutes = express.Router()
    pCrudRoutes.post('/Products',Upload.single('ProductImage'),CreateProducts)
    pCrudRoutes.get('/getproducts',getProducts)
    pCrudRoutes.get('/singleProduct/:id',singleProduct)
    pCrudRoutes.delete('/delete/:id',DeleteProduct)
    pCrudRoutes.put('/update/:id',Upload.single('ProductImage'),UpdateProducts)


export default pCrudRoutes