const express = require('express')
const app = express()



app.get('/' , (req ,res)=>{
    res.send('habb from the server')
})


app.listen('4000' , ()=>{
    console.log('server is runnign on the port 4000')
})