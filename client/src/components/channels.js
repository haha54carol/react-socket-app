import React, { Component } from 'react';

import io from 'socket.io-client'
const url = 'http://localhost:4000'

class Channels extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="chatRoom">
                start to chat!
        </div>
        )

    }
}

export default Channels