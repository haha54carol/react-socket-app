import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './css/App.css'
import 'semantic-ui-css/semantic.min.css';

import AppComp from './pokemon/index'
const App = () => (
  <Router>
      <AppComp />
  </Router>
)


export default App