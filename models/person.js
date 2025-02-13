// const { uniqueId } = require('lodash')
const mongoose=require('mongoose')

//define the person Schema
// const personSchema = new mongoose.Schema()

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        require:true
    }
});
//Schema ke badh model banana jaruri hai 

//create the model
const Person=mongoose.model('Person',personSchema);

module.exports=Person
