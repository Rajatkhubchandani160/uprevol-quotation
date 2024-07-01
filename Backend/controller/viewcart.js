const cartproduct = require("../models/cartproduct")


const cartdetails = async(req,res)=>{
    try{
        const currentUser = req.userId;
    
        const allProduct = await cartproduct.find({
            userId: currentUser
        }).populate("productId")
        console.log(allProduct)
        res.json({
            data : allProduct,
            success : true,
            error : false
        })

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}
module.exports=cartdetails