const User = require("../models/user");  
const express = require("express");
const bcryptjs = require("bcryptjs"); 

const authRouter = express.Router();

authRouter.post('/api/signup', async (req,res)=> {
    req.body;

    //  1) get the data from user then
    try {

        const {  name, email, password} = req.body;   

        const existinUser = await User.findOne({ email });  
    
        if(existinUser) {   
            return res.status(400).json({ msg : "User already exist!"});    
        }

        const hashPassword = await bcryptjs.hash(password, 8);  

        // enter new keyword always before creating model
        let user = new User({   
            name, 
            email,
            password : hashPassword,    
        })
        
        user = await user.save();
        res.json(user);     

    } catch(e) {        
        res.status( 500 ).json({ error: e.message });   
    }

    //  2)  Post data in database       
    //  3) return that data to user
});

module.exports = authRouter;    