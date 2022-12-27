const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res, next) => {
    console.log('Got get to root path')
    res.send('Got get to root path')
})

app.post('/users', requireJson, (req, res) => {
    console.log('User added')
    res.send('User added')
  })

const requireJson = function(req, res, next){
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).send('Server accept only application/json')
    } else {
      next()
    }
}  

app.listen(port, () => {
    console.log("Example app listening on port ", port)
})