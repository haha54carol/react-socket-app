import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
                <div className="chatList__header">
                    Channels
                </div>
                {this.state.channels.map(channleName =>
                    <Link key={`channel_${channleName}`} to={`/channels/${channleName}`} className="chatList__item">
                        {channleName}
                    </Link>
                )}
                <div className="chatList__header">
                    Direct Message (on line)
                </div>
                {this.state.directs.map(roomName =>
                    <Link key={`room_${roomName}`} to={`/rooms/${roomName}`} className="chatList__item">
                        {roomName}
                    </Link>
                )}
            </div>
        )
    }
}

export default List