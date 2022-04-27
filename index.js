const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const details = require('./Routes/user')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', details)

app.listen(PORT, () => {
    console.log(`Server Running on port:http://localhost:${PORT}`);
})