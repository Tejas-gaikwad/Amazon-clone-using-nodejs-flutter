//IMPORTS FROM PACKAGES
const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");       
const DB = "mongodb+srv://Tejasgaikwad:Paramkrishna%406745@cluster0.b2fa1.mongodb.net/?retryWrites=true&w=majority";

//IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');        



//MIDDLEWARE 
app.use(express.json());    
app.use(authRouter);    

//connection with mongoose  
mongoose
.connect(DB)    
.then(() => {
    console.log("Mongoose connection succesful");   
})
.catch((e) => {
    console.log(e); 
})

app.listen(PORT, "0.0.0.0", function() {
    console.log(`Connected port at ${PORT} !`);  
});     

