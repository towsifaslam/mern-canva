const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')


if(process.env.NODE_ENV === 'local'){
    app.use(cors({
        origin:'http://localhost:5173/',
        credentials:true
    }))
}else{
    app.use(cors({  
        credentials:true
    }))
}

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,"./client/dist")))
      app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'./','client','dist','index.html'))
      })
}


const dbConnect = async()=>{
    try {
        if(process.env.NODE_ENV==='local'){
            await mongoose.connect(process.env.MONGODB_URL)
            console.log('Local database is connect...')
        }else{
            await mongoose.connect(process.env.MONGODB_URL)
            console.log('Product  database is connect...')
        }
    } catch (error) {
        
    }
}


dbConnect()
const PORT = process.env.PORT || 3002
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})