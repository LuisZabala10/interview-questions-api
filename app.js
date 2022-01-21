const express = require('express')
require('dotenv').config()
const authorize = require('./src/auth/authorize')
const questionsRoute = require('./src/routes/questionsRoute')

const app = express()
const port = 3000

app.use(authorize)

//routers
app.use('/api/v1/questions', questionsRoute)

app.listen(port, () => console.log(`App listening on port ${port}!`))
