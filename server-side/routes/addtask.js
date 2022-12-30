const express = require('express')
const router = express.Router()
var task = require('./postData').task

router.post('/', (req, res) => {
    task[req.body.user].push(req.body.task)
    console.log(task)
    res.send()
})
router.delete('/deletetask/:user/:index',(req,res)=>{
    var arr=task[req.params.user]
    arr.splice(req.params.index,1)
    task[req.params.user]=arr
    res.send(task[req.params.user])
})
router.get("/:user", (req, res) => {
    if (req.params.user in task) {
        res.send(task[req.params.user])
    }
})
module.exports = router;