const productmodel = require("../models/productmodel")

const getproductdetails =async(req,res)=>{
    try{
        const {productId} =req?.body
        // product id that we get from the dynamic url
        console.log("Product's Id ",productId)
        const productDetails =await productmodel.findById(productId)

        res.json({
            message:"Get product details Successfully",
            data:productDetails,
            success:true,
            error:false
        })
    }
    catch(err){
        res.json({
            message:err.message,
            error:err || err.message,
            success:false,
        })
    }

}
module.exports = getproductdetails