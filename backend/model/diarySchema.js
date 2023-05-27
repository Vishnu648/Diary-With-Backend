const mongoose=require('mongoose')

const Schema=mongoose.Schema

const diary=new Schema({
    date:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Diary",diary)