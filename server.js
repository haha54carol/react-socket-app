const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4000

const app = express()

const server = http.createServer(app)

const io = socketIO(server)

io.on('connection', client => {
    console.log('User connected')

    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval', interval)

        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    })


    client.on('disconnect', () => {
        console.log('user disconnected')
    })
})


server.listen(port, () =>
    console.log(`Listening on port: ${port}`))