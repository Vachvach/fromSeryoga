const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes')

const PORT = 3000
const app = express()
app.use(express.json())
app.use(router)


async function startApp() {
    try {
        await mongoose.connect('mongodb+srv://user:user@cluster0.rdrfu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('Server has been started on Port ' + PORT))
    } catch (error) {
        console.log(error)
    }
}
startApp()