const express = require('express')
const app = express()
const port = 3000


//Endpoint get
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Endpoint post
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

//Endpoint delete 
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})


//Endpoint put 
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })