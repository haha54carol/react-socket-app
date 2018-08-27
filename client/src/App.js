import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/App.css'
import 'semantic-ui-css/semantic.min.css';
import List from './components/list'
import Channels from './components/channels'
import Rooms from './components/rooms'
import User from './pokemon/User'

const App = () => (
  <Router>
      <User />
  </Router>
)


export default App