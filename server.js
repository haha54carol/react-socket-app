const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)


io.on('connection', socket => {
    console.log('user on connection!')

    socket.on('enterRoom', people => {
        console.log('** [enter] **')
        io.sockets.emit('enterRoom', people)
    })

    socket.on('message', msgObj => {
        console.log('** [message] **')
        io.sockets.emit('clientMessage', msgObj)
    })
    socket.on('disconnect', () => {
        console.log('user disconnect!')
    })
})

server.listen(port, (err) => {
    if (err) throw err
    console.log(`Listening on port: ${port}`)
})