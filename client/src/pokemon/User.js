import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SocketClient from '../socket'
import SocketHOC from './socketHOC'

const ChatRoom = ({userName, msg}) => <div>{userName} : {msg}</div>

const Avatar = ({ userName, available, selectUser }) =>
    <div className="user" onClick={() => selectUser(userName)}>
        <img src={`/images/${userName}.jpg`} className={`avatar ${available ? '' : 'grayscale'}`} />
        <div className="userName">{userName}</div>
    </div>

// class User extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             charactor: {
//                 Pikachu: {
//                     available: true
//                 },
//                 Charmander: {
//                     available: true
//                 },
//                 Bulbasaur: {
//                     available: true
//                 },
//                 Squirtle: {
//                     available: true
//                 }
//             },
//             userName: null,
//             socketCleint: new SocketClient()
//         }
//
//         this.updateUserStatus = this.updateUserStatus.bind(this)
//         this.selectUser = this.selectUser.bind(this)
//     }
//
//     componentDidMount(){
//         this.state.socketCleint.onEnterRoom(user => {
//             this.updateUserStatus(user)
//         })
//     }
//
//     updateUserStatus(user){
//         this.setState((pre) => {
//             return pre.charactor[user].available = false
//         })
//
//         this.setState({
//             userName: user
//         })
//     }
//
//     selectUser(user){
//         this.state.socketCleint.emitEvent('enter', user)
//     }
//     componentWillUnmount(){
//         this.state.socketCleint.disconnectSocket()
//     }
//
//
//     render() {
//         const { charactor, userName } = this.state
//         return (
//             <div>
//
//                 { userName ? <ChatRoom userName={userName} msg="hello !" /> :
//                     Object.keys(charactor).map(user =>
//                         <Avatar userName={user}
//                             key={user}
//                             available={charactor[user].available}
//                             selectUser={this.selectUser}
//                         />
//                     )
//                 }
//             </div>
//         )
//     }
// }

class UserComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            character: {
                Pikachu: {
                    available: true
                },
                Charmander: {
                    available: true
                },
                Bulbasaur: {
                    available: true
                },
                Squirtle: {
                    available: true
                }
            },
            user: null,
        }
    }

    componentDidMount(){

    }

    render(){
        const {socketData} = this.props
        return (
            <div>{socketData}</div>
        )
    }
}
const User = SocketHOC(UserComp, 'onEnterRoom')


User.propTypes = {};

export default User;
