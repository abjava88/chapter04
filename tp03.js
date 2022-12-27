const express = require('express')
const app = express()
const port = 3000

app.use(logger)  

app.get('/', (req, res, next) => {
    console.log('Got get to root path')
    res.send('Got get to root path')
})

app.get('/users', (req, res) => {
    console.log('Got get to /users')
    res.send('Got get to /users')
  })


function logger(req, res, next){
    console.log("Inside logger")
    next()
}  

app.listen(port, () => {
  console.log("Example app listening on port ", port)
})