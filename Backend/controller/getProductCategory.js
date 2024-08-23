const productmodel = require("../models/productmodel")

const getProductCategory =async(req,res)=>{
    try{
        const product=await productmodel.find().distinct("category")
        console.log("category",product)
        const productByCategory =[]
        for(const category of product){
            const Oneproduct =await productmodel.findOne({category})
            if(Oneproduct){
                productByCategory.push(Oneproduct)
            }
        }
        res.json({
            message:"product category",
            data:productByCategory,
            success:true,
            error:false
        })
    }catch(err){
        res.json({
            message:err.message,
            error:err || err.message,
            success:false,
        })
    }

}
module.exports =getProductCategory