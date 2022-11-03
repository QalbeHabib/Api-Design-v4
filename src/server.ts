import express from 'express'
import router from './router'
const app = express()




app.get('/', (req, res) => {
    console.log('something ')
    res.status(200)
    res.json({ mesasge: "habib" })
})

app.use('/api', router)

export default app