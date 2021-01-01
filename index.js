const express = require('express')
const path = require('path')

const app = express()

const views = path.join(__dirname, './views')

app.get('/', (req, res)=>{
    res.sendFile(views+'/index.html')
})

app.use((req,res)=>{
    res.sendFile(views+'/404.html')
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server listening for requests at port 3000")
})