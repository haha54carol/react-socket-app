import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import '../css/App.css';
import List from './list'
import Channels from './channels'

class Index extends Component {
    render() {
        return (
            <div className="container">

                <Switch>
                    <Route exact path="/chat" component={Channels} />
                    <Route path="/chat" component={Channels} />
                </Switch>
            </div>
        )

    }
}

export default Index