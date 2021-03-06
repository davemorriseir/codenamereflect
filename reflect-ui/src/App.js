import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Box, Grid, Grommet } from 'grommet'

import { THEME } from './config/theme'

import Sidebar from './layout/Sidebar'
import Header from './layout/Header'

import Survey from './surveys/Survey'
import TakeSurveyButton from './surveys/TakeSurveyButton'

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Grommet full theme={THEME}>
            <Box background="white" fill="vertical">
              <Grid
                fill="vertical"
                rows={['auto', 'flex']}
                columns={['auto', 'flex']}
                areas={[
                  { name: 'header', start: [0, 0], end: [1, 0] },
                  { name: 'sidebar', start: [0, 1], end: [0, 1] },
                  { name: 'main', start: [1, 1], end: [1, 1] }
                ]}
              >
                <Header />
                <Sidebar />
                <Box gridArea="main" justify="center" align="center">
                  <Route exact path="/" component={TakeSurveyButton} />
                  <Route path="/surveys/:surveyId" component={Survey} />
                </Box>
              </Grid>
            </Box>
          </Grommet>
        </ApolloProvider>
      </Router>
    )
  }
}

export default App
