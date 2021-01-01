const express = require('express')
const path = require('path')

const app = express()

const views = path.join(__dirname, './src/views')
const public = path.join(__dirname, './public')

app.use(express.static(public))

app.get('/', (req, res)=>{
    res.sendFile(public+'/index.html')
})

app.use((req,res)=>{
    res.sendFile(views+'/404.html')
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server listening for requests at port 3000")
})