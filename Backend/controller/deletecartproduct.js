const cartproduct = require("../models/cartproduct");

const deletecartproduct=async(req,res)=>{
    try{
        const currentuser=req?.userId
        const productId=req?.body?._id
        
        const deleteProduct =await cartproduct.deleteOne({_id:productId})
        res.json({
            message:"product removed from cart",
            success:true,
            error:false,
            data:deleteProduct
        })
    }
    catch(err){
        res.json({
            message: err.message,
            error: true,
            success: false,
          });
    }

}
module.exports=deletecartproduct