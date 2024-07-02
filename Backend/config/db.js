const mongoose=require('mongoose');

async function connectDB(){
    try{
        // await mongoose.connect("mongodb://127.0.0.1:27017/Uprevol")
        await mongoose.connect('mongodb+srv://Rajatkhubchandani:rajat@uprevol.kthyvep.mongodb.net/Uprevol')
        
       
    }catch(err){
        console.log(err)
    }
}

module.exports=connectDB