
const usermodel =require('../models/usermodel')
async function allusers(req,res){
    try{
        const userdetails=await usermodel.find();
        // console.log("user ki info",userdetails)
        res.status(200).json({
            message:userdetails,
            error:false,
            success:true,
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}
module.exports=allusers