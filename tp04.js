const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res, next) => {
    console.log('Got get to root path')
    res.send('Got get to root path')
})

app.get('/users', auth, (req, res) => {
    console.log('Got get to /users')
    res.send('Got get to /users')
  })

app.use(logger)  


function logger(req, res, next){
    console.log("Inside logger")
    next()
}

function auth(req, res, next){
    if(req.query.admin === 'true'){
        next()
    }else{
        res.end("Auth failed")
    }
}

app.listen(port, () => {
  console.log("Example app listening on port ", port)
})