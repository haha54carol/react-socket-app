const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = 4000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

// io.on('connection', socket => {
//     // socket.join('room', () => {
//     //     console.log('join room')
//     //     io.to('room').emit('send from room', '....')
//     // })
//     console.log('User on connected!')

//     socket.on('join room', room => {
//         socket.join(room, () => {
//             console.log('join a room: ' + room)
//         })
//     })

//     socket.on('get msg from room', room => {
//         io.in(room).emit('event', `send msg to ${room}`)
//     })

//     socket.on('disconnect', () => {
//         console.log('disconnect')
//     })
// })

io.on('connection', socket => {
    socket.on('enter room', room => {
        socket.join(room, () => {
            console.log('join a room:' + room)
        })
    })

    socket.on('send to', (room, msg) => {
        io.in(room).emit('private-message', msg)
    })

    socket.on('leave room', room => {
        socket.leave(room)
    })

    socket.on('disconnect', () => {
        console.log('disconnect')
    })
})

io.of('/family').on('connection', socket => {
    console.log('connected to family')

    socket.on('typing', (people) => {
        socket.emit('typing', `${people} is typing`)
    })

    socket.on('send message', msg => {
        socket.emit('family message', msg)
    })

    socket.on('disconnect', () => {
        console.log('disconnect from family')
    })
})


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



// io.of('/TwoSeconds').on('connection', socket => {
//     console.log('/TwoSeconds on connected!')

//     setInterval(() => {
//         const sec = new Date()
//         socket.emit('TwoSeconds', sec.getSeconds());
//     }, 2000)

//     socket.on('disconnect', () => {
//         console.log('/TwoSeconds disconnect')
//     })

// })


server.listen(port, (err) => {
    if (err) throw err
    console.log(`Listening on port: ${port}`)
})