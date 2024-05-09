import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import  dbConnection from './src/DB/dbConnection.js';
import Authrouter from './src/Routes/Auth.Routes.js';
import crudRoute from './src/Routes/crud.Routes.js';
import pCrudRoutes from './src/Routes/ProductsROutes/pCrud.Routes.js';
import OrderRoute from './src/Routes/Order/Order.Routes.js';

const app = express();
app.use(express.json())
app.use(cors())
app.use(express.static('Public'))

app.use('/api/v1/auth',Authrouter)
app.use('/api/v1/crud',crudRoute)
app.use('/api/v1/ProductCrud',pCrudRoutes)
app.use('/api/v1/ProductOrders',OrderRoute)



dotenv.config()
dbConnection()
const Port = process.env.PORT
app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`)
})