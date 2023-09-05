const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/users.router')
const app = express()
const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use(express.json())

//Connect mongoDB

mongoose.connect('mongodb+srv://luisfdlta:Mejorsolo1095@cluster0.aauduvj.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected to DB - Mongo Atlas");
    })
    .catch(error => {
        console.error("Error en la conexion", error)
    })

app.use("/api/users", userRouter)
