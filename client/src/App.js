import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './timerSocket';

class App extends Component {
  constructor() {
    super()

    this.state = {
      timestamp: 'no time yet'
    }
  }

  componentDidMount = () => {
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  };


  render() {


    return (
      <div className="App">
        <p>Timer value updated from server side : {this.state.timestamp}</p>
      </div>
    );
  }
}

export default App;
