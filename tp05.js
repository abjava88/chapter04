const express = require('express')
const app = express()
const router = express.Router();
const port = 3000


router.use(logger)

router.get('/', (req, res, next) => {
    console.log('Got get to root path')
    res.send('Got get to root path')
})

router.get('/users', auth, (req, res) => {
    console.log('Got get to /users')
    res.send('Got get to /users')
  })


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

app.use(router)

app.listen(port, () => {
  console.log("Example app listening on port ", port)
})