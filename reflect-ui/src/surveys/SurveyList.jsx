import React from 'react'
import { Box } from 'grommet'
import { Query } from 'react-apollo'
import { SURVEYS_QUERY } from './api/queries'

const SurveyList = () => {
  return (
    <Query query={SURVEYS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        return (
          <Box
            tag="header"
            direction="row"
            align="center"
            justify="between"
            background="brand"
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation="medium"
            style={{ zIndex: '1' }}
          >
            <pre>{JSON.stringify(data.surveys, null, 2)}</pre>
          </Box>
        )
      }}
    </Query>
  )
}

export default SurveyList
