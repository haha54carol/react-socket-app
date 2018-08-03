import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            channels: ['Family'],
            directs: ['Mom']
        }
    }

    render() {
        return (
            <div className="chatList">
                <div className="chatList__header">Channels</div>
                <div className="chatList__item">{this.state.channels.map(c => <div>{c}</div>)}</div>
                <div className="chatList__header">Direct Message</div>
                <div className="chatList__item">{this.state.directs.map(d => <div>{d}</div>)}</div>
            </div>
        )
    }
}

export default List