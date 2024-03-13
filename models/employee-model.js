const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    id:{
        type:String,
        require:true,
        
    },
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phonenumber:{
        type:String,
        require:true
    },
    blocked:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("Employee",employeeSchema)