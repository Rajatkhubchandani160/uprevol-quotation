const usermodel=require('../models/usermodel')
const userdetails=async (req,res)=>{
    try{
        // console.log("userId",req.userId)
        const user = await usermodel.findById(req.userId)
        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })
    }
    catch(err){
        res.status(400).json({
            message:err.message,
            error: true,
            success:false,  
        })
    }
}

module.exports=userdetails