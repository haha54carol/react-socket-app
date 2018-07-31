const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4000

const app = express()

const server = http.createServer(app)

const io = socketIO(server)


io.of('/Seconds').on('connect', socket => {
    console.log('/Seconds on connected!')

    setInterval(() => {
        const sec = new Date()
        socket.emit('Seconds', sec.getSeconds());
    }, 1000)

    socket.on('disconnect', () => {
        console.log('/Seconds, disconnect')
    })
})



io.of('/TwoSeconds').on('connect', socket => {
    console.log('/TwoSeconds on connected!')

    setInterval(() => {
        const sec = new Date()
        socket.emit('TwoSeconds', sec.getSeconds());
    }, 2000)

    socket.on('disconnect', () => {
        console.log('/TwoSeconds, disconnect')
    })

})


server.listen(port, () =>
    console.log(`Listening on port: ${port}`))