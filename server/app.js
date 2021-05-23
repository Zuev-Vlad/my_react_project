const config = require('config')
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRoutes')


const app = express()

app.use('/api/auth', authRouter)

const PORT = config.get('port') || 5000
const mongoUri = config.get('mongoUri')

async function start() {
    try {
        mongoose.connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
            .then(resp => {
                // console.log(resp)
            })

    } catch (e) {
        console.log("Server Error " + e.message)
        process.exit(1)
    }
}

start()
app.listen(PORT, () => console.log('server start true'))