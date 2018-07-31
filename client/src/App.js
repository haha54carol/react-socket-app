import React, { Component } from 'react';
import './css/App.css';
import sockets from './clientSocket';

import { connect } from 'react-redux';
import * as actions from './actions/action'

class App extends Component {

  connectSocket(namespace) {
    const { updateSeconds, updateTwoSeconds } = this.props

    sockets[namespace](sec => {
      if (namespace === 'subscribeToSeconds')
        updateSeconds(sec)
      else
        updateTwoSeconds(sec)
    })
  }

  disconnectSocket(namespace) {
    sockets[namespace]()
  }

  render() {

    const { seconds, twoSeconds } = this.props
    return (
      <div className="App">

        <p>Seconds : {seconds}</p>
        <button onClick={() => this.connectSocket('subscribeToSeconds')}>Connect Socket</button>
        <button onClick={() => this.disconnectSocket('unsubscribeToSeconds')}>Disconnect Socket</button>

        <p>2 Seconds : {twoSeconds}</p>
        <button onClick={() => this.connectSocket('subscribeToTwoSeconds')}>Connect Socket</button>
        <button onClick={() => this.disconnectSocket('unsubscribeToTwoSeconds')}>Disconnect Socket</button>
      </div>
    );
  }
}

const mapS2P = state => {
  return { seconds: state.seconds, twoSeconds: state.twoSeconds }
}

const mapD2P = dispatch => {
  return {
    updateSeconds: sec => dispatch(actions.updateSeconds(sec)),
    updateTwoSeconds: sec => dispatch(actions.update2Seconds(sec))
  }
}


export default connect(mapS2P, mapD2P)(App);
