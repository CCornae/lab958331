const express = require('express')
const app = express()

app.get('/as2', function(req, res)
{
    const q = req.query
    res.send("Name:Chotiphat Chaijumroonphan <br/>Login Date:" + q.month + " " + q.date + " " +q.year)
})

app.listen(9999,function()
{
    console.log("Server is running on PORT 9999")
})