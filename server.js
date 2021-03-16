const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, "static")))

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "static", "index.html"))
})



var port = 8000
app.listen(port, () => {
    console.log("server running on Port " + port)
})