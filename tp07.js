const express = require('express')
const fs = require('fs')
const app = express()
require('dotenv').config()

const port = process.env.port || 3000


app.get('/admin', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
      if (err) {
        next(err) // Pass errors to our error handler.
      } else {
        res.send(data)
      }
    })
})

app.use(errorHandler)

app.get('/users', (req, res, next) => {
    fs.readFile('/file-does-not-exist', (err, data) => {
        if (err) {
          next(err) // Pass errors to our error handler.
        } else {
          res.send(data)
        }
      })
})


function errorHandler(err, req, res, next){
    console.log("Middleware Error Hadnling");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })

}

app.listen(port, () => {
  console.log("Example app listening on port ", port)
})