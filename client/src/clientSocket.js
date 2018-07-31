import io from 'socket.io-client'
const url = 'http://localhost:4000'


let secondsSocket, twoSencondsSocket

const subscribeToSeconds = (fn) => {
    if (!secondsSocket) {
        secondsSocket = io(`${url}/Seconds`)
    }

    secondsSocket.on('Seconds', sec => fn(sec))
}

const unsubscribeToSeconds = () => {
    secondsSocket.disconnect()
    secondsSocket = null
}

const subscribeToTwoSeconds = (fn) => {
    if (!twoSencondsSocket) {
        twoSencondsSocket = io(`${url}/TwoSeconds`)
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