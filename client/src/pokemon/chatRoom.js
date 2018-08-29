import React, { Component } from 'react'
import SocketHOC from '../hoc/socketHOC'
import { connect } from 'react-redux'
import { Label, Form, Image, Input } from 'semantic-ui-react'

const MessageInputBox = ({ onEnter }) => {
    return (
        <Input size='big'
            icon='send'
            placeholder='Press Enter to Send Message...'
            onKeyPress={onEnter}

            style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}
        />
    )
}

class ChatRoomComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }

    componentDidUpdate(preProps, preState) {

        if (preProps.socketData !== this.props.socketData) {
            this.setState({
                messages: [...preState.messages, this.props.socketData]
            })
        }
    }

    onEnter = (e) => {
        const { emitToServer, user } = this.props
        if (e.key === 'Enter') {
            const message = e.target.value

            emitToServer('message', {
                user,
                message
            })

            e.target.value = null
        }

    }


    render() {
        const { messages } = this.state
        const { user: selectedUser } = this.props
        return (
            <div className="chatContainer">
                <div className="msgsBox" >
                        {messages.map((m, idx) => {
                            const position = selectedUser === m.user ? "right" : "left"
                            return (
                                    <div key={`m_${idx}`}>
                                    {
                                        position === 'right' ?

                                            <Form.Field inline style={{ textAlign: 'right', marginBottom:10}}>
                                                <Label size="big" pointing={position}>{m.message}</Label>
                                                <Image avatar src={`/images/${m.user}.jpeg`} size="mini" spaced='left' />
                                            </Form.Field>
                                            :
                                            <Form.Field inline style={{ textAlign: 'left', marginBottom:10}}>
                                                <Image avatar src={`/images/${m.user}.jpeg`} size="mini" spaced='left' />
                                                <Label size="big" pointing={position}>{m.message}</Label>
                                            </Form.Field>
                                    }
                                    </div>
                            )
                        })}
                        </div>
                <div>
                    <MessageInputBox onEnter={this.onEnter} />
                </div>
            </div>
        )
    }
}

const mapS2P = state => {
    return {
        user: state.user
    }
}

const SocketComp = SocketHOC(ChatRoomComp, 'onClientMessage', true)
const ChatRoom = connect(mapS2P)(SocketComp)

export default ChatRoom