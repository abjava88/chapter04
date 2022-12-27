const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')

const userRoutes = require('./routes/users')

const port = process.env.PORT

// use json middleware to parse http body
app.use(bodyParser.json())


app.use('/users', userRoutes)

app.listen(port, () => {
    console.log("Example app listening on port ", port)
  })
