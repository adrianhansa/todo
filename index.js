const path = require('path')
const express = require('express')
const app = express()

const views = path.join(__dirname, 'src/views')

app.listen(3000,()=>{
    console.log("Server listening for requests at port 3000")
})

app.get('/', (res,req)=>{
    res.sendFile(views+'/index.html')
})

app.use((req,res)=>{
    res.sendFile(views+'/404.html')
})