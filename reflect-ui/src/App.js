import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import './App.css'

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Query
            query={gql`
              {
                surveys {
                  id
                  name
                  description
                  surveyType
                  createdAt
                  updatedAt
                  surveySections {
                    id
                    name
                    description
                    position
                    surveyQuestions {
                      id
                      questionText
                      type
                    }
                  }
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error :(</p>
              return <pre>{JSON.stringify(data.surveys, null, 2)}</pre>
            }}
          </Query>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
