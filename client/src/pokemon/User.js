import React, {Component} from 'react'
import SocketHOC from '../hoc/socketHOC'
import {connect} from 'react-redux'
import {Label, Modal, Button} from 'semantic-ui-react'

class UserComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    render() {
        const {pokemons, show, emitToServer} = this.props
        const {user} = this.state
        const users = Object.keys(pokemons)


        return (
            <div>
                <Modal open={true}>
                    <Modal.Header>Select a Role.</Modal.Header>
                    <Modal.Content>
                        {users.map(userName =>
                                <span key={`key_${userName}`} style={{marginRight: 10}} onClick={() => this.setState({user: userName})}>
                                    <Label className={pokemons[userName] ? null : 'inactiveLabel'} image>
                                        <img src={`/images/${userName}.jpg`}/>
                                        {userName}
                                    </Label>
                                </span>
                        )}
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={() => emitToServer('enterRoom', user)}>Confirm</Button>
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
        pokemons: state.availablePokemon,
        show: state.showModal
    }
}


const SocketComp = SocketHOC(UserComp, 'onEnterRoom')
const User = connect(mapS2P)(SocketComp)

export default User
