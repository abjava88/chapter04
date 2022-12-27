const express = require('express')
const app = express()
const router = express.Router()
const port = 3000

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
app.use('/user', router)


app.listen(port, () => {
    console.log("Example app listening on port ", port)
})
