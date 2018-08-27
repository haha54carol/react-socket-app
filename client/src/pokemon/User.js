import React, {Component} from 'react'
import SocketHOC from '../hoc/socketHOC'
import {connect} from 'react-redux'
import {Label, Modal, Button} from 'semantic-ui-react'

class UserComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            showModal: true
        }
    }

    render() {
        const {pokemons, emitToServer} = this.props
        const {user, showModal} = this.state
        const users = Object.keys(pokemons)


        return (
            <div>
                <Modal open={showModal}>
                    <Modal.Header>Select a Role.</Modal.Header>
                    <Modal.Content>
                        {users.map(userName =>
                                <span key={`key_${userName}`}
                                      style={{marginRight: 10}}
                                      onClick={() => {
                                        if(pokemons[userName]){
                                            this.setState({user: userName})
                                      }
                                }}>
                                    <Label className={pokemons[userName] ? null : 'inactiveLabel'} color={user === userName ? 'red': null} image>
                                        <img src={`/images/${userName}.jpg`}/>
                                        {userName}
                                    </Label>
                                </span>
                        )}
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={() => {
                            if(user){
                                emitToServer('enterRoom', user)}
                                this.setState({
                                    showModal: false
                                })
                            }}>Confirm</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )

        // return (
        //    display ?
        //     <div >
        //         {users.map(user =>
        //             <Avatar key={`key_${user}`} userName={user} available={pokemons[user]} selectedUser={emitToServer} />
        //         )}
        //     </div> : null
        // )
    }
}

const mapS2P = state => {
    return {
        pokemons: state.availablePokemon
    }
}


const SocketComp = SocketHOC(UserComp, 'onEnterRoom')
const User = connect(mapS2P)(SocketComp)

export default User
