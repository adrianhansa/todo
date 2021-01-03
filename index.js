const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Todo = require('./src/models/todo')

const app = express()

//connect to mongodb
const dbURI = "mongodb+srv://adrianhansa:Stroiana1916@cluster0.uzvpc.mongodb.net/todo-app?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser:true,useUnifiedTopology:true})
        .then(result=>{
            app.listen(process.env.PORT || 3000,()=>{
                console.log("Server listening for requests at port 3000")
            })
        })
        .catch(error=>console.log(error))

app.set('view engine','ejs')

const public = path.join(__dirname, './public')

app.use(express.static(public))

app.get('/', (req, res)=>{
    Todo.find().the(result=>{
        res.render('index',{title:"Home page", todos:result})
    }).catch(error=>console.log(error))
})

app.get('/todos/create',(req,res)=>{
    const todo = new Todo({
        content: "Complete Todo Application"
    })
    todo.save().then(result=>{
        res.redirect('/')
    }).catch(error=>console.log(error))
})

app.get('/about',(req,res)=>{
    res.render('about',{title:"About"})
})

app.use((req,res)=>{
    res.status(404).render('404',{title:"Page not found"})
})
