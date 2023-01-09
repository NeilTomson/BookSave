const express  = require("express")
const  app =  express()
const port = 3000
const mongoose =require("mongoose")
const cors = require("cors");
const AuthorRouters =require("./routers/authors")
const BookRouters =require("./routers/books")

app.use(express.json());
app.use(cors());
//db
require("dotenv").config();
mongoose.set('strictQuery', false);
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
}); 
app.use("/authors",AuthorRouters)
app.use("/books",BookRouters)

app.listen(port,()=>{
    console.log(`the server is runing on port ${port}`)
})