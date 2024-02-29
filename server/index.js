const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.get('/',(req, res)=>{
    UserModel.find({})
    .then(Users => res.json(Users))
    .catch(err => res.json(err)) 
})

app.get('/getUser/:id',(req, res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(Users => res.json(Users))
    .catch(err => res.json(err)) 
})


app.put('/updateUser/:id',(req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        name:req.body.name, 
        email: req.body.email, 
        age: req.body.age})
    .then(Users => res.json(Users))
    .catch(err => res.json(err)) 
})



app.post("/createUser", (req ,res)=>{
    UserModel.create(req.body)
    .then(Users=> res.json(Users))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("Server is running")
})