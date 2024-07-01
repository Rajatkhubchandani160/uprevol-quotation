
const userModel =require('../models/usermodel')
const updateUser =async(req,res)=>{
    try{
    const {userId,email,name,role}=req.body
    const sessionUser=req.userId
    const payload={
        ...(email && {email:email}),
        ...(name && {name:name}),
        ...(role && {role:role}),
    }
    const user=await userModel.findById(sessionUser)
    // console.log("user role :",user.role)
    const updatedUser=await userModel.findOneAndUpdate(userId,payload) 
    res.json({
        message:"Data Updated Successfully",
        success:true,
        error:false,
        data:updatedUser,
    })
    }
    catch(err){
        res.status(400).json({
            message:err || err.message,
            error:true,
            success:false
        })
    }
}
module.exports=updateUser