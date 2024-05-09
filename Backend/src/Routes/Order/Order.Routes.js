import express from 'express'
import { orderDetailes } from '../../Controllers/Order/Order.Controller.js'
import {getAllOrders, getSingleOrders} from '../../Controllers/Order/GetOrder.Controllers.js'

const OrderRoute = express.Router()
OrderRoute.post('/orders',orderDetailes)
OrderRoute.get('/getallorder',getAllOrders,)
OrderRoute.get('/getsingleorder/:id',getSingleOrders)
export default OrderRoute;