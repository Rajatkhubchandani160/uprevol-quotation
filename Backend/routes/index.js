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
const deleteproduct=require('../controller/deleteproduct')
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
const UploadBannerController = require('../controller/Uploadbanner');
const displaybanners = require('../controller/displaybanners');
const deleteBanner = require('../controller/deletebanner');
const displaySale = require('../controller/displaySale');
const editSale = require('../controller/editSale');
const addSale = require('../controller/addSale');
const addService = require('../controller/addservice');
const updateservice = require('../controller/updateservice');
const deleteservice = require('../controller/deleteservice');
const displayservice = require('../controller/displayservice');
const addtestimonial = require('../controller/addtestimonial');
const displaytestimonial = require('../controller/displaytestimonial');
const deletetestimonial = require('../controller/deletetestimonial');

const displaywhychooseus = require('../controller/diplaywhychooseus');
const addwhychooseus = require('../controller/addwhychooseus');
const deleteWhyChooseUs = require('../controller/deletewhychooseus');
const addorupdatecontact = require('../controller/addorupdatecontact');
const displaycontact = require('../controller/displaycontact');
const deletecontact = require('../controller/deletecontact');
const deletesale = require('../controller/deletesale');
const { getRandomProducts } = require('../controller/getrandomproduct');

// const serviceController=require('../controller/Servicescontroller')
// const testimonialController=require('../controller/testimonialcontroller')
// const sectionController=require('../controller/sectioncontroller')
// const pageController=require('../controller/displayservicepagecontroller')
router.post("/signup",Signup)
router.post("/signin",Signin)
router.get('/userdetails',authtoken,userdetails)
router.get('/logout',logout)
router.get('/all-users',authtoken,allusers)
router.post('/updateUser',authtoken,updateUser)
router.post('/upload-product',authtoken,UploadProductController)
router.post('/delete-product/:id',authtoken,deleteproduct)
router.get('/get-product',Displayproduct)
router.post('/update-product',authtoken,updateproduct)
router.get('/get-productCategory',getProductCategory)
router.post('/get-categoryallproducts',getCategoryWiseProduct)
router.get('/random-products', getRandomProducts);
router.post('/get-productdetails',getproductdetails)
router.post('/addto-cart',authtoken,addToCart)
router.get('/products-added',authtoken,countcartproduct)
router.get('/view-cart',authtoken,cartdetails)
router.post('/update-cartproduct',authtoken,updateAddToCart)
router.post('/deletecart-product',authtoken,deletecartproduct)
router.get('/search-product',searchProduct)
router.post('/enquery-cart',authtoken,sendQuoteRequest)
router.post('/feedback',userfeedback)
router.post('/upload-banner',authtoken,UploadBannerController)
router.get('/banners',displaybanners)
router.post('/banners/:id',authtoken,deleteBanner); 
router.post('/add-sale',addSale)
router.get('/show-sale', displaySale);
router.post('/edit-sale/:id', editSale);
router.delete('/delete-sale/:id',deletesale)
router.post('/add-service',authtoken, addService);
router.post('/update-service/:id', authtoken,updateservice);
router.get('/show-services',displayservice);
router.delete('/delete-service/:id',authtoken, deleteservice);
router.post('/add-testimonial',addtestimonial)
router.get('/display-testimonial',displaytestimonial)
router.delete('/delete-testimonial/:id',deletetestimonial)
router.post('/add-info',addwhychooseus)
router.get('/display-info',displaywhychooseus)
router.delete('/delete-info/:id',deleteWhyChooseUs)
router.post('/update-contactInfo',addorupdatecontact)
router.get('/display-contactInfo',displaycontact)
router.delete('/delete-contactInfo/:id',deletecontact)
module.exports=router