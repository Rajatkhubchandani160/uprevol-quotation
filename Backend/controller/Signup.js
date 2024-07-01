
const usermodel =require( "../models/usermodel")
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function Signup(req,res){

    try{
        const{name,email,password}=req.body
        // console.log(req.body)
        const user =await usermodel.findOne({email})
         
        if(user){
            throw new Error("User Already Exists")
        }
        if(!email){
            throw new Error("Please Provide Email")
        }
        
        if(!name){
            throw new Error("Please Provide name")
        }
        
        if(!password){
            throw new Error("Please Provide Password")
        }

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(password,  salt);
        if(!hash){
            throw new Error('something wrong')
        }
        const payload={
            ...req.body,
            password:hash,
            role:"General",
        }
        const userdata=new usermodel(payload)
       const saveuser= userdata.save()

       res.status(201).json({
        data:saveuser,
        error:false,
        success:true,
        message:"User created successfully"
       })
    }catch(err){
        res.json({
            message:err.message,
            error:err || err.message,
            success:false,
        })
    }
}

module.exports=Signup