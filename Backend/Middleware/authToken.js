const jwt=require('jsonwebtoken')
async function authtoken (req,res,next){
    try{
        const token=req.cookies?.token 
        
        if(!token){
            return res.json({
                message:"First ,Log in to your cart .....!",
                error:true,
                success:false,
            })
        }
        jwt.verify(token,process.env.TOKEN_SECRET_KEY,function(err,decoded){
           
            console.log("decoded mesage",decoded)
            if(err){
                console.log("error auth",err);
            }
            req.userId=decoded?._id
            next()
        })
        
    }
    catch(err){
        res.status(400).json({
            message:err.message,
            data:[],
            error: true,
            success:false,  
        })
    }

}

module.exports=authtoken