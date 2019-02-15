import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const SurveyList = () => {
  return (
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
  )
}

export default SurveyList
