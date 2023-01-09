const mongoose =require("mongoose");

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,  
    },
    finishDate:{
        type:Date,

    },
    page:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true
    }
})
const BookModel =mongoose.model("Book-BookSave-App",BookSchema)
module.exports =BookModel