const express = require("express");


const app = express()

const axios = require('axios');

const port = 5000;


app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=> {
    return res.json({status: "working"})
})

app.listen(port, () => {
    console.log("Running at port: ", port)
})