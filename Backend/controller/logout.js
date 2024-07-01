async function logout(req,res){
    try{
        res.clearCookie("token")

        res.json({
            message:"logout successfully",
            error:false,
            success:true,
            data:[]
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

module.exports=logout;