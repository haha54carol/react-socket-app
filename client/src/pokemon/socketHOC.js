import React, {Component} from 'react'
import SocketClient from '../socket'


function withSocketClient(WrappedComponent, eventFunction){
    return class extends Component{
        constructor(props){
            super(props)

            this.state = {
                socketCleint: new SocketClient(),
                socketData: null
            }
        }

        componentDidMount(){
            this.state.socketCleint[eventFunction](data =>{
                this.setState({
                    socketData:data
                })
            })
        }

        componentWillUnmount(){
            this.state.socketCleint.disconnectSocket()
        }

        render(){
            return <WrappedComponent socketData={this.state.socketData} {...this.props} />
        }
    }
}

export default withSocketClient