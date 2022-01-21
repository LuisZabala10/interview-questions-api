const express = require('express')
const app = express()
const port = 3000

app.get('/api/v1/questions', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`))