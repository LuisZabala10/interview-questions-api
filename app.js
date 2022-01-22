const express = require('express')
require('dotenv').config()
const authorize = require('./src/auth/authorize')
const connect = require('./src/db/connection')
const questionsRoute = require('./src/routes/questionsRoute')

const app = express()

app.use(authorize)

app.use(express.json())

//routers
app.use('/api/v1/questions', questionsRoute)

const port = 3000
const startApp = async () => {
  try {
    await connect(process.env.MONGO_URI)
    app.listen(port, () => console.log(`App listening on port ${port}!`))
  } catch (error) {
    console.log('CANNOT CONNECT TO THE DATABASE', error)
  }
}

startApp()
