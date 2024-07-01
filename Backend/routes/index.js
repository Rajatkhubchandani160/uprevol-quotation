const express=require('express');
const router=express.Router()


const Signin=require('../controller/Signin');
const userdetails=require('../controller/userdetails')
const authtoken = require('../Middleware/authToken');
const logout=require('../controller/logout');

const allusers = require('../controller/allusers');
const UploadProductController = require('../controller/uploadproduct');
const Displayproduct = require('../controller/Displayproduct');
const updateproduct = require('../controller/updateproduct');
const updateUser = require('../controller/Updateuser');
const Signup = require('../controller/Signup');
const getProductCategory = require('../controller/getProductCategory');
const getCategoryWiseProduct = require('../controller/getCategoryWiseProduct');
const getproductdetails = require('../controller/getproductdetails');
const addToCart = require('../controller/addToCart');
const countcartproduct = require('../controller/countcartproduct');
const cartdetails = require('../controller/viewcart');
const updateAddToCart = require('../controller/updateaddtocart');
const deletecartproduct = require('../controller/deletecartproduct');
const searchProduct = require('../controller/searchproduct');
const sendQuoteRequest  = require('../controller/Enquerycart');
const userfeedback = require('../controller/userfeedback');
router.post("/signup",Signup)
router.post("/signin",Signin)
router.get('/userdetails',authtoken,userdetails)
router.get('/logout',logout)
router.get('/all-users',authtoken,allusers)
router.post('/updateUser',authtoken,updateUser)
router.post('/upload-product',authtoken,UploadProductController)
router.get('/get-product',Displayproduct)
router.post('/update-product',authtoken,updateproduct)
router.get('/get-productCategory',getProductCategory)
router.post('/get-categoryallproducts',getCategoryWiseProduct)
router.post('/get-productdetails',getproductdetails)
router.post('/addto-cart',authtoken,addToCart)
router.get('/products-added',authtoken,countcartproduct)
router.get('/view-cart',authtoken,cartdetails)
router.post('/update-cartproduct',authtoken,updateAddToCart)
router.post('/deletecart-product',authtoken,deletecartproduct)
router.get('/search-product',searchProduct)
router.post('/enquery-cart',authtoken,sendQuoteRequest)
router.post('/feedback',userfeedback)
module.exports=router