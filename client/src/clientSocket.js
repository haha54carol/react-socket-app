import io from 'socket.io-client'
const url = 'http://localhost:4000'

const socketInstance = (path) => {
    let instance

    if (instance) {
        return instance
    }

    instance = io(`${url}${path}`)

    return instance

}


let secondsSocket, twoSencondsSocket

const subscribeToSeconds = (fn) => {
    if (!secondsSocket) {
        secondsSocket = socketInstance('/Seconds')
    }
    secondsSocket.on('Seconds', sec => fn(sec))
}

const unsubscribeToSeconds = () => {

    secondsSocket.disconnect()
    secondsSocket = null
}

const subscribeToTwoSeconds = (fn) => {
    if (!twoSencondsSocket) {
        twoSencondsSocket = socketInstance('/TwoSeconds')
    }
    twoSencondsSocket.on('TwoSeconds', sec => fn(sec))
}

const unsubscribeToTwoSeconds = () => {

    twoSencondsSocket.disconnect()
    twoSencondsSocket = null
}



export default {
    subscribeToSeconds,
    unsubscribeToSeconds,
    subscribeToTwoSeconds,
    unsubscribeToTwoSeconds
}