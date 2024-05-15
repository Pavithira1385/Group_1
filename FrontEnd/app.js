const express=require("express")
const cors=require("cors")
const collection=require('../server/rate/models/mongo')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",async(req,res)=>{
    try{
        const allData=await collection.find({})
        res.json(allData)
    }
    catch(e){
        res.json("fail")
        console.log(e)
    }
})
app.post("/",async(req,res)=>{
    const {msg,name,email,encryptedPassword}=req.body

    const data={
        msg:msg,
        name:name,
        email:email,
        encryptedPassword:encryptedPassword
    }
    try{
        await collection.insertMany([data])
        const allData=await collection.find({})
        res.json(allData)
    }
    catch(e){
        res.json("fail")
        console.log(e)
    }
    
})

app.listen(8000,()=>{
    console.log("Port Connected")
})