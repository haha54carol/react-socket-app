import React, {Component} from 'react'
import SocketClient from '../socket'
import store from '../store'
import actions from '../actions/action'

function withSocketClient(WrappedComponent, eventFunction){
    return class extends Component{
        constructor(props){
            super(props)

            this.state = {
                socketCleint: new SocketClient(),
                socketData: null
            }

            this.emitToServer = this.emitToServer.bind(this)
        }

        componentDidMount(){
            this.state.socketCleint[eventFunction](data =>{
                store.dispatch(actions[eventFunction](data))
            })
        }

        emitToServer(event, msg){
            this.state.socketCleint.emitEvent(event, msg)
        }

        componentWillUnmount(){
            this.state.socketCleint.disconnectSocket()
        }

        render(){
            return <WrappedComponent socketData={this.state.socketData} emitToServer={this.emitToServer} {...this.props} />
        }
    }
}

export default withSocketClient