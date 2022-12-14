const express = require('express')
const cors = require ('cors')
const path=require('path')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))


app.get('/',(req,res) => {
    res.status(200).sendFile(path.join(__dirname,'../public/index.html'))

})

app.get('./api/:temperature', (req,res) => {
    let {temperature} = req.params
    res.status(200).send(`it was ${temperature} out today`)

})






app.listen(4000, console.log('server running on 4000'))