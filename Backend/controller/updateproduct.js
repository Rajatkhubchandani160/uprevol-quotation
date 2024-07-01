const { error } = require("console")
const uploadproductpermission = require("../helpers/permission")
const productmodel = require("../models/productmodel")

const updateproduct=async(req,res)=>{
    try{
        if(!uploadproductpermission(req.userId)){
            throw new Error("Permission denied")
        }
        const { _id ,...restbody}=req.body
        const updateproduct =await productmodel.findByIdAndUpdate(_id,restbody)
        res.json({
            message:"product Updated Successfully",
            data:updateproduct,
            success:true,
            error:false
        })
    }
    catch(err){
        res.json({
            message:err.message,
            error:false,
            success:false,
        })
    }
}
module.exports=updateproduct