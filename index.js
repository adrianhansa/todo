const express = require('express')
const path = require('path')

const app = express()
app.set('view engine','ejs')

const public = path.join(__dirname, './public')

app.use(express.static(public))

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.use((req,res)=>{
    res.render('404.html')
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server listening for requests at port 3000")
})