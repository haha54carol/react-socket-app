import React, { Component } from 'react';

import SocketClient from '../clientSocket'

class Rooms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            roomName: ''
        }
        this.sendMsg = this.sendMsg.bind(this)
    }

    componentDidMount() {
        const { roomName } = this.props.match.params

        Promise.resolve(
            this.setState({
                [roomName]: new SocketClient(null, roomName),
                roomName
            })
        ).then(() => {
            this.state[roomName].connectToRoom(data =>
                this.setState({ messages: [...this.state.messages, data] })
            )
        })
    }

    componentWillUnmount() {
        const { roomName } = this.state
        this.state[roomName].unconnect()
    }

    sendMsg(msg) {
        const { roomName } = this.state
        const event = `chatRoom_${roomName}`
        this.state[roomName].emitMessage(event, { message: msg, user: 'Carol' })
    }


    render() {
        const { messages } = this.state
        return (
            <div className="chatRoom">
                {messages.map((m, idx) =>
                    <div key={`msg_${idx}`} className="chatRoom__msg">
                        <span>{m.user} : </span>
                        <span>{m.message}</span>
                    </div>
                )}

                <div className="tagsBar">
                    <div className="tagsBar__messageTag" onClick={() => this.sendMsg('Hi Mom!')}>Hi Mom</div>
                    <div className="tagsBar__messageTag" onClick={() => this.sendMsg('Did you see my skirt?')}>Did you see my skirt?</div>
                    <div className="tagsBar__messageTag" onClick={() => this.sendMsg('Thanks')}>Thanks</div>
                </div>
            </div>
        )
    }
}

export default Rooms