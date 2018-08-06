const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)


const response = (data) => {
    switch (data) {
        case 'Hi Mom!':
            return 'Hi sweety!'
        case 'Did you see my skirt?':
            return 'It\'s in your bag.'
        case 'Thanks':
            return 'You are welcome.'
        default:
            return 'Bye.'
    }
}


io.on('connection', socket => {
    console.log('on connection...')

    let room = socket.handshake.query.room;
    if (room) {
        socket.join(room)
    }

    socket.on(`chatRoom_${room}`, data => {
        io.in(room).emit(room, data)

        setTimeout(() => {
            io.in(room).emit(room, { message: response(data.message), user: 'Mom' })
        }, 500)
    })

    socket.on('disconnect', () => {
        console.log('disconnect')
    })
})


// io.of('/family').on('connection', socket => {
//     console.log('connected to family')

//     socket.on('typing', (people) => {
//         socket.emit('typing', `${people} is typing`)
//     })

//     socket.on('send message', msg => {
//         socket.emit('family message', msg)
//     })

//     socket.on('disconnect', () => {
//         console.log('disconnect from family')
//     })
// })


// io.of('/Seconds').on('connection', socket => {
//     console.log('/Seconds on connected!')

//     setInterval(() => {
//         const sec = new Date()
//         socket.emit('Seconds', sec.getSeconds());
//     }, 1000)

//     socket.on('disconnect', () => {
//         console.log('/Seconds disconnect')
//     })
// })



server.listen(port, (err) => {
    if (err) throw err
    console.log(`Listening on port: ${port}`)
})