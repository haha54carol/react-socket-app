import React, { Component } from 'react'
import ChatRoom from './chatRoom'
import UserComp from './user'

// class Index extends Component{
//     render(){
//         return(
//             <div>
//                 <UserComp />
//                 <ChatRoom />
//             </div>
//         )
//     }
// }

// export default Index

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Index = () => (
    <div>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid centered style={{ height: '100%' }} verticalAlign='middle' columns={2}>
    <Grid.Row >
    <Grid.Column>
      {/* <div style={{height: '100%', backgroundColor:'green'}}>
            <div style={{height: 450}}>
            test
            </div>
      </div> */}
      <UserComp />
                 <ChatRoom />
    </Grid.Column>
    </Grid.Row>
    </Grid>
    </div>
)

export default Index