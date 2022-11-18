const express = require('express')
require('dotenv').config()

const app = express()

app.get('/test', (req, res) => {
    res.send("Hello From Another Side")
})

app.listen(process.env.PORT, () => {
    console.log("Server Running");
})