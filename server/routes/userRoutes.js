import { getAllProducts, addProductToCart, getAllCartProducts, removeCartProduct } from '../controllers/userController.js';
import express from 'express'

const router = express.Router()

router.get('/products',getAllProducts)
router.post('/addToCart',addProductToCart)
router.get('/getCartItem',getAllCartProducts)
router.delete('/removeCartItem/:id',removeCartProduct)



export default router;