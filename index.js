const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

//Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes in ms
    max: 500
})

app.use(limiter)
app.set('trust proxy', 1)

//Set Static Folder
app.use(express.static('public'))

//ROUTES

app.use('/api', require('./routes/routes'))
app.use(cors())

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))
