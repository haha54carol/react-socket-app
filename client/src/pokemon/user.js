import React, {Component} from 'react'
import SocketHOC from '../hoc/socketHOC'
import {connect} from 'react-redux'
import action from '../actions/action'
import {Label, Modal, Button } from 'semantic-ui-react'

class UserComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            showModal: true
        }
    }

    render() {
        const {pokemons, emitToServer, setUser} = this.props
        const {user, showModal} = this.state
        const users = Object.keys(pokemons)


        return (
            <div>
                <Modal open={showModal}>
                    <Modal.Header>Select a Role.</Modal.Header>
                    <Modal.Content>
                        {users.map(userName =>
                            <div key={`key_${userName}`}
                                      style={{marginRight: 10, display: 'inline-block', marginBottom: 10}}
                                      onClick={() => {
                                        if(pokemons[userName]){
                                            this.setState({user: userName})
                                      }
                                }}>
                                    <Label size="big" className={pokemons[userName] ? null : 'inactiveLabel'} color={user === userName ? 'red': null} image>
                                        <img src={`/images/${userName}.jpeg`} alt={userName}/>
                                        {userName}
                                    </Label>
                                </div>
                        )}
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='blue' onClick={() => {
                            if(user){
                                emitToServer('enterRoom', user)
                                setUser(user)
                                this.setState({
                                    showModal: false
                                })}
                            }}>Start To Chat!</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

const mapS2P = state => {
    return {
        pokemons: state.availablePokemon
    }
}

const mapD2P = dispatch =>{
    return {
        setUser: (user) =>{
            return dispatch(action.setUser(user))
        }
    }
}

const SocketComp = SocketHOC(UserComp, 'onEnterRoom')
const User = connect(mapS2P,mapD2P)(SocketComp)

export default User
