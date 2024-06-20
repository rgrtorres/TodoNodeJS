require('dotenv').config()

//Express
const express = require('express')
const app = express()

//MONGO
const mongoose = require('mongoose')
try {
    mongoose.connect(process.env.MONGODB)
}catch(e) {
    console.log('Erro na conexão com o banco')
}

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.set("view engine", "ejs")

// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

//CONFIG
const port = process.env.PORT

app.listen(port, () => console.log(`Server started on port: ${port}`))