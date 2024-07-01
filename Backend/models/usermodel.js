const { timeStamp } = require('console')
const mongoose=require('mongoose')

// mongoose.connect('mongodb:127.0.0.1:27017//Uprevol')
const userSchema=mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:String,
    profileimage:{
        type:String,
        default:"https://imgs.search.brave.com/HJ7mMmRgakDaN_wuCHx99ZZs5nEbsA0-ttI_mlgzolQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw",
    },
    role:String,
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }]
},{
    timeStamps:true,
})

module.exports = mongoose.model("user",userSchema)
