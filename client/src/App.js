import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux';
import * as actions from './actions/action'
import SocketClient from './clientSocket';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Seconds: null
    }
    this.connectSocket = this.connectSocket.bind(this)
    this.disconnectSocket = this.disconnectSocket.bind(this)
    this.updateProps = this.updateProps.bind(this)
  }

  updateProps(result) {
    const { updateSeconds, updateTwoSeconds } = this.props
    const { data, namespace } = result

    if (namespace === 'Seconds')
      updateSeconds(data)
    else if (namespace === 'TwoSeconds')
      updateTwoSeconds(data)


  }

  connectSocket(namespace, room) {
    if (!this.state[namespace]) {
      Promise.resolve(
        this.setState({ [namespace]: new SocketClient(namespace, room) })
      ).then(() => {
        this.state[namespace].subscribe(data => this.updateProps({ data, namespace }))
      })
    } else {
      this.state[namespace].subscribe(data => this.updateProps({ data, namespace }))
    }
  }

  disconnectSocket(namespace) {
    this.state[namespace].unsubscribe()
    this.setState({ [namespace]: null })
  }


  render() {

    const { seconds, twoSeconds } = this.props
    return (
      <div className="App">

        <p>Seconds : {seconds}</p>
        <button onClick={() => this.connectSocket('Seconds')}>Connect Socket</button>
        <button onClick={() => this.disconnectSocket('Seconds')}>Disconnect Socket</button>

        <p>2 Seconds : {twoSeconds}</p>
        <button onClick={() => this.connectSocket('TwoSeconds')}>Connect Socket</button>
        <button onClick={() => this.disconnectSocket('TwoSeconds')}>Disconnect Socket</button>

      </div>
    );
  }
}

const mapS2P = state => {
  return {
    seconds: state.seconds,
    twoSeconds: state.twoSeconds
  }
}

const mapD2P = dispatch => {
  return {
    updateSeconds: sec => dispatch(actions.updateSeconds(sec)),
    updateTwoSeconds: sec => dispatch(actions.update2Seconds(sec)),
  }
}


export default connect(mapS2P, mapD2P)(App);
