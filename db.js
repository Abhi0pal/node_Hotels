const mongoose=require('mongoose');
require('dotenv').config();
// 
//define the MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels';  //Replace 'mydatabase' with your database name - hotels
const mongoURL=process.env.MONGODB_URL;
//setUp mongoDB Connection


mongoose.connect(mongoURL)
// {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }
// )

//get the default connection
//Mongoose maintains a default connection object represent the MongoDb conenction
const db=mongoose.connection;


//define event listener for the dataBase connection

db.on('connected',()=>{
    console.log('Connected to MongoDB')
})

db.on('error',()=>{
    console.log("MongoDB Connection error");
})
db.on('disconnected',()=>{
    console.log("MongoDB Disconnected");
})
 
module.exports=db;