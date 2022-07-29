const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type: String,       
        require : true,
        trim : true,    
    },
    email : {
        require : true,
        trim : true,
        validate : {
            validator : (value) => {
                const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
                return value.match(re);
            },
            message: 'Please enter valid email address',
        },
        type : String
    },
    password : {
        require : true ,
        type : String,
        validator : {
            validator : (value) => {
                return value.length > 6
            },      
            message : 'Please enter long password',
        }
    },
    address : {
        type : String,  
        default : ''
    },
    type: {
        type : String,
        default : 'user'
    },
    //cart
})

const User = mongoose.model("User", userSchema);
module.exports = User;  