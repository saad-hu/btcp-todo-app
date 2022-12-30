const express = require('express')
const Router = express.Router()
var userData = {}
var task = {}

Router.post("/signup", (req, res) => {
    if (!(req.body.uName in userData)) {
        userData[req.body.uName] = { fName: req.body.fName, lName: req.body.lName, password: req.body.password }
        task[req.body.uName] = []
        console.log(userData)
        res.send(false)
    }
    else {
        res.send(true)
    }

})


Router.get("/:user/:password", (req, res) => {
    if (req.params.user in userData) {
        userData[req.params.user].password === req.params.password ? res.send(true) : res.send(false)
    }
    else {
        res.send(false)
    }
})

module.exports.Router = Router
module.exports.task = task