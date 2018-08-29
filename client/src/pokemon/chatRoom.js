import React, { Component } from 'react'
import SocketHOC from '../hoc/socketHOC'
import { connect } from 'react-redux'
import {Label, Form,  Image, Input, Container, Grid} from 'semantic-ui-react'

const MessageInputBox = ({onEnter}) =>{
    return(
            <Input size='big'
                    icon='send'
                    placeholder='Press Enter to Send Message...'
                    onKeyPress={onEnter}
                    style={{position: 'fixed', bottom: 0, left:0, width: '100%'}}
            />
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
        const {user:selectedUser}= this.props
        return(
            <Container fluid>
                <Grid>
                    {messages.map((m, idx) =>{
                        const position = selectedUser === m.user ? "right": "left"
                       return (
                           <Grid.Row columns="1" key={`m_${idx}`}>
                           <Grid.Column
                           floated={position}
                           textAlign={position}>
                               {
                                   position === 'right' ? <Form.Field inline>
                                       <Label pointing={position}>{m.message}</Label>
                                       <Image avatar src={`/images/${m.user}.jpg`} size="mini" spaced='left'/>
                                   </Form.Field> : <Form.Field inline>
                                       <Image avatar src={`/images/${m.user}.jpg`} size="mini" spaced='left'/>
                                       <Label pointing={position}>{m.message}</Label>
                                   </Form.Field>
                               }

                            </Grid.Column>
                            </Grid.Row>
                       )

                    })}
                </Grid>
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