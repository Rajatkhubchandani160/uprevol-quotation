const usermodel = require("../models/usermodel")

const uploadproductpermission =async(userId)=>{
    const user=await usermodel.findById(userId);
    // console.log(user)
    if(user.role !== 'ADMIN'){
        return false
    }
    else{
        return true
    }
}
module.exports=uploadproductpermission