import express from 'express'

const app = express()



app.get('/' , (req , res) =>{
    console.log('something ')
    res.status(200)
    res.json({mesasge:"habib"})
})


export default app