import io from 'socket.io-client'
const url = 'http://localhost:4000'


export default class SocketClient {
    constructor(namespace) {
        this.namespace = namespace || null
        this.socket = io(`${url}/${namespace}`)
    }

    subscribe(fn) {
        this.socket.on(this.namespace, data => fn(data))
    }

    unsubscribe() {
        this.socket.disconnect()
    }
}

