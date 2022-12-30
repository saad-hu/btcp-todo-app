const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const addtask = require('./routes/addtask')
const postData = require('./routes/postData').Router


app = express()
app.listen(3001);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/addtask', addtask)
app.use("/postData", postData)


