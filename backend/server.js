require('dotenv').config();  

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
app.use(express.json())
app.use(cors())
PORT = 8085
mongoose.connect(process.env.MONGO_URI).then((res) => {
    console.log('connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});


const userSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    desc: {
        type: String,
        require: [true, "strin desc"]
    }
})

const userModel = mongoose.model("Users", userSchema)
//get
app.get("/", async(req, res) => {
    const data =await userModel.find()
    res.send(data)
})
//post
app.post("/", async(req, res) => {
    const newModel =await new userModel({
        ...req.body
    })
newModel.save()
res.send(newModel)
})

//delete
app.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const newModel=await userModel.findByIdAndDelete(id)
    res.send("delete")
})


//get by id
app.get("/:id",async(req,res)=>{
    const {id}=req.params
    const target=await userModel.findById(id)
    res.send(target)
})

app.listen(PORT, (req, res) => {
    console.log("app listener");
})