const express = require('express')
const port = 8000
const path = require('path')
const app = express()
app.use(express.static("static"));

app.get('/', (req , res ) =>{

    console.log('URL' , req.url , "header" , req.headers, 'Method' , req.method)
  res.sendFile(path.resolve('./index.html'))
})
app.listen(4000 , ()=>{
    console.log('server running on the port ')
})