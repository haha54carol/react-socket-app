import React, { Component } from 'react'
import ChatRoom from './chatRoom'
import UserComp from './user'

class Index extends Component{
    render(){
        return(
            <React.Fragment>
                <UserComp />
                <ChatRoom />
            </React.Fragment>
        )
    }
}

export default Index