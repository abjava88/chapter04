const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000;
app.use(bodyParser.json())

app.post('/user', (req, res, next) => {
    console.log("Get usres endpoint")
    let user = req.body
    console.log("User: ", user)
    res.send("Post user endpoint")
})
app.listen(port, () => {
    console.log("Example app listening on port ", port)
})