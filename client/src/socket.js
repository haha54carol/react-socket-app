import io from 'socket.io-client'
const url = 'http://localhost:4000'


export default class SocketClient {
    constructor() {
        this.socket = io(`${url}`)
    }

    onEnterRoom(fn) {
        this.socket.on('enterRoom', data => fn(data))
    }

    onClientMessage(fn) {
        this.socket.on('clientMessage', data => fn(data))
    }

    emitEvent(event, msg) {
        this.socket.emit(event, msg)
    }

    disconnectSocket() {
        this.socket.disconnect()
    }
}