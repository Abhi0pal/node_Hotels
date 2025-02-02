const express = require("express");
const router = express.Router();

const Person=require('./../models/person')



//Post route to add a person //matlab ki data save kar rahe mongoDB meh user se leke
//Post Req of Person
router.post("/", async (req, res) => {
  //try and catch
  try {
    const data = req.body; // Assuming the request body contains the person data
    //create a new Person document using the Mongoose Model
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Internal Error Occurred", error: err.message  });
  }
});
//Get Request Person ki
router.get("/", async (req, res) => {
  //find all persons
  try {
    const data = await Person.find();
    console.log("Fetched Data Successfully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Internal Error Occurred", error: err.message });
  }
  const data = await Person.find();
});

//Get /person/:workType
router.get("/:workType", async (req, res) => {
  const workType = req.params.workType; //: Params: An object that contains route parameters.
  try {
    if (workType == "chef" || ",manager" || "waiter") {
      const response = await Person.find({ work: workType });
      console.log("Response Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "Invalid Work Type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Internal Error Occurred", error: err.message  });
  }
});

router.put('/:id',async (req,res)=>{
 
  try {
    const personId = req.params.id; //extract the id from th URL Prarameter
    const updatedPersonData=req.body //updated data for the person

    const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
      new:true, //return the updated document
      runValidators: true,
    })
    if(!response){
     return res.status(404).json({message:"Person Not Found"})
    }
    console.log("data Updated");
    res.status(200).json(response);
    
  } catch (error) {
    console.log(err)
    res.status(500).json({message:"Internal Error Occurred",error:err.message})
    
    
  }
})


router.delete('/:id',async (req,res)=>{
 
  try {
    const personId = req.params.id; //extract the id from th URL Prarameter
    

    const response=await Person.findByIdAndDelete(personId);
    if(!response){
     return res.status(404).json({message:"Person Not Found"})
    }
    console.log("Person data Delete Successfully");
    res.status(200).json(response);
    
  } catch (error) {
    console.log(err)
    res.status(500).json({message:"Internal Error Occurred",error:err.message})
    
    
  }
})



//this is for testing purpose 
module.exports=router;
