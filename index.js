const express = require('express')
const path = require('path')

const app = express()
app.set('view engine','ejs')

const public = path.join(__dirname, './public')

app.use(express.static(public))

app.get('/', (req, res)=>{
    const todos = [
        {id: 1, task: "Study Excel", completed: false},
        {id: 2, task: "Buy some water", completed: false},
        {id: 3, task: "Exercise 55 minutes", completed: false},
    ]
    res.render('index',{title:"Home page", todos})
})

app.get('/about',(req,res)=>{
    res.render('about',{title:"About"})
})

app.use((req,res)=>{
    res.status(404).render('404',{title:"Page not found"})
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server listening for requests at port 3000")
})