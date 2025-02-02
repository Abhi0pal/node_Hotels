const express = require("express");
const router = express.Router();

const MenuItem = require("./../MenuItems");

router.post("/", async (req, res) => {
  try {
    const data = req.body; //body-parser se data aya req.data
    const newItem = new MenuItem(data); // uss data ko Mongoose model meh
    const response = await newItem.save(); //wait kiya data save hone ka
    console.log("Data Saved");
    res.status(200).json(response); //response de diya
  } catch (err) {
    console.log(err); //if error is encountered
    res
      .status(500)
      .json({ message: "Internal Error Occurred", error: err.message }); //mssg dal diya error ka
  }
});
//GEt Request or EndPoint MenuItems
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Data Fetched Successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error); //if error is encountered
    res
      .status(500)
      .json({ message: "Internal Error Occurred", error: err.message }); //mssg dal diya error ka
  }
});
//Get Request or EndPoint MenuItems by taste
router.get("/:taste", async(req, res) => {
  try {
    const tasteType = req.params.taste;
    if (
      tasteType == "sour" ||
      tasteType == "sweet" ||
      tasteType == "spicy"
    ) {
      const data = await MenuItem.find({ taste: tasteType });
      console.log("Fetched Succesfully");
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Invalid Work Type" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal Error Occurred", error: err.message });
  }
});

module.exports = router;
