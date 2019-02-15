import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Box, Button, Grid, Grommet } from 'grommet'

import Sidebar from './layout/Sidebar'
import Header from './layout/Header'

import SurveyList from './surveys/SurveyList'

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Grommet>
            <Grid
              fill
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
                <Route
                  exact
                  path="/"
                  component={() => {
                    return (
                      <Link to="/surveys">
                        <Button fill>See Surveys</Button>
                      </Link>
                    )
                  }}
                />
                <Route path="/surveys" component={SurveyList} />
              </Box>
            </Grid>
          </Grommet>
        </ApolloProvider>
      </Router>
    )
  }
}

export default App
