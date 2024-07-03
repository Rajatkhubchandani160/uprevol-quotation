const bcrypt=require('bcryptjs')
const usermodel =require( "../models/usermodel")
const jwt=require('jsonwebtoken');
async function Signin(req,res){
try{
    
    const{email,password}=req.body
    if(!email){
        throw new Error("Please Provide Email")
    } 
    if(!password){
        throw new Error("Please Provide Password")
    }
        const user =await usermodel.findOne({email})
        console.log(user)
         if(!user){
            throw new Error("User not Found");
         }
         const CheckPassword = await bcrypt.compare(password, user.password)
         console.log(CheckPassword)
         if(CheckPassword){
            const tokenData={
                _id:user._id,
                email:user.email,
            }
            const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET_KEY,{expiresIn:60*60*8})
            const tokenOption={
                httpOnly:true,
                secure:true,
            }
            res.cookie("token",token,tokenOption).json({
                message:"Login Successfully",
                data:token,
                success:true,
                error:false
            })
         } 
         else{
            throw new Error("Please Check Password")
         }
        
        }

        

catch(err){
    res.json({
        message:err.message,
        error: err.message,
        success:false,
    })
}

}

module.exports=Signin
