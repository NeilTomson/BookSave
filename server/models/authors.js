const mongoose =require("mongoose");

const AuthorsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    country:{
        type:String,  
    },
    age:{
        type:Number,
        required:true
    }
})
const AuthorModel =mongoose.model("authors-BookSave-App",AuthorsSchema)
module.exports =AuthorModel