import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/App.css'
import List from './components/list'
import Channels from './components/channels'
import Rooms from './components/rooms'

const App = () => (
  <Router>
    <div className="container">
      <List />
      <Route path="/Channels/:channelName" component={Channels} />
      <Route path="/Rooms/:roomName" component={Rooms} />
    </div>
  </Router>
)


export default App