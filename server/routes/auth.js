const User = require("../models/user");  
const express = require("express");
const bcryptjs = require("bcryptjs"); 
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

const authRouter = express.Router();    


authRouter.post('/api/signup', async (req, res) => {

  
    //  1) get the data from user then
    try {

        const { name, email, password } = req.body;     

 

        const existinUser = await User.findOne({ email });      
        
        // console.log(email); 

        if(existinUser) {       

            return res.status(400).json({ msg : "User already exist!"});    
    
        }
        // const salt = await bcrypt.genSalt(10);
        // // now we set user password to hashed password
        // hashPassword = await bcrypt.hash(password, salt);

        const hashPassword = await bcryptjs.hash(password, 8);      

        // enter new keyword always before creating model   
        let user = new User({ 
            name, 
            email,  
            password : hashPassword,               
        })  

        user = await user.save();
        res.json(user);     
        // console.log(user.json);   

    } catch(e) {        
        console.log(e);         
        res.status( 500 ).json({ error: e.message });   
    }

    //  2)  Post data in database       
    //  3) return that data to user
});


/////////////     SignIn route    //////////////////////
authRouter.post('/api/signin', async(req, res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({msg : 'Email is not right'});
        }

       const isMatch = await bcryptjs.compare(password, user.password);

       if(!isMatch){
        return res.status(400).json({ msg : 'User not valid' })
       }

       const token = jwt.sign({ id: user._id }, "passwordKey"); 

       res.json({token, ...user._doc})    


    } catch(e) {
        res.status(500).json( { error : e.message } );
    }
});


//////////////////////     check token is valid or not API     /////////////////////////
authRouter.post('/tokenIsValid', async(req, res) => {
    try{
        const token = req.header('x-auth-token')

        if(!token) return res.json(false);
        const verified = jwt.verify(token, 'passwordKey');
        
        if(!verified) return res.json(false);   

        const user = await User.findById(verified.id);

        if(!user) return res.json(false);
        res.json(true);     

    } catch(err) {
        res.status(500).json({error : err.message}) 
    }
});

//////////////////////     Get User Data     /////////////////////////

authRouter.get('/', auth, async(req, res) =>{
    const user = await User.findById(req.user); 
    res.json({...user._doc, token: req.token}); 
}); 


module.exports = authRouter;    