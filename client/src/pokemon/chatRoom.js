import React, { Component } from 'react'
import SocketHOC from '../hoc/socketHOC'
import { connect } from 'react-redux'
import {Label, Icon,  Form, Input, Container, Button} from 'semantic-ui-react'

const MessageInputBox = ({onEnter}) =>{
    return(
        <Form>
            <div>
                <Input size='big'
                       icon='send'
                       action={{ icon: 'search' }}
                       placeholder='Press Enter to Send Message...'
                       onKeyPress={onEnter}
                       style={{position: 'fixed', bottom: 0, left:0, width: '100%'}}
                />
            </div>
        </Form>
    )
}

class ChatRoomComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
    }

    componentDidUpdate(preProps, preState){

        if(preProps.socketData !== this.props.socketData) {
            this.setState({
                messages: [...preState.messages, this.props.socketData]
            })
        }
    }

    onEnter = (e) => {
        const {emitToServer, user} = this.props
        if(e.key === 'Enter'){
            const message = e.target.value

            emitToServer('message', {
                user,
                message
            })

            e.target.value = null
        }

    }

    render(){
        const {messages} = this.state
        return(
            <Container fluid>
                {messages.map((m, idx) =>{
                   return <div key={idx}>{m.user}:{m.message}</div>
                })}
                <MessageInputBox onEnter={this.onEnter} />
            </Container>
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