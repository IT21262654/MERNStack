const express = require('express')

//express app
const app = express()

//listen for express
app.listen(4091, () => {
    console.log('listeneing on port 4091')
})