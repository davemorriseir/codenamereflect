import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import SurveyList from './surveys/SurveyList'

import './App.css'

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <Link to="/surveys">
              <button>See Surveys</button>
            </Link>
            <Route exact path="/surveys" component={SurveyList} />
          </div>
        </ApolloProvider>
      </Router>
    )
  }
}

export default App
