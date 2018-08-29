import React from 'react'
import ChatRoom from './chatRoom'
import UserComp from './user'
import { Grid } from 'semantic-ui-react'

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
                    <div style={{ height: 450, backgroundColor: 'white', borderRadius: 5 }}>
                        <div className="windowStatus">
                        <div className="windowDeco1"></div>
                        <div className="windowDeco2"></div>
                            <div className="windowDeco3"></div>
                        </div>
                        <Grid>
                            <UserComp />
                            <Grid.Column width={16}>
                            <ChatRoom />
                            </Grid.Column>

                        </Grid>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default Index