import io from 'socket.io-client'
const url = 'http://localhost:4000'


export default class SocketClient {
    constructor(channelName, roomName) {
        this.channelName = channelName || null
        this.roomName = roomName || null
        this.socket = roomName ? io(`${url}?room=${roomName}`) : io(`${url}/${channelName}`)
    }

    connectToRoom(fn) {
        this.socket.on(this.roomName, data => fn(data))
    }

    connectToChannel(fn) {
        this.socket.on(this.channelName, data => fn(data))
    }

    emitMessage(event, msg) {
        this.socket.emit(event, msg)
    }

    unconnect() {
        this.socket.disconnect()
    }
}

// export default class SocketClient {
//     constructor(namespace) {
//         this.namespace = namespace || null
//         this.socket = io(`${url}/${namespace}`)
//     }

//     subscribe(fn) {
//         this.socket.on(this.namespace, data => fn(data))
//     }

//     unsubscribe() {
//         this.socket.disconnect()
//     }
// }

