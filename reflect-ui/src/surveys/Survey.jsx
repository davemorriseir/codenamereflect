import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Grid, Heading, Layer, Text } from 'grommet'
import { Close } from 'grommet-icons'
import { Query } from 'react-apollo'

import SurveySection from './SurveySection'

import { SURVEY_QUERY } from './api/queries'

const Survey = ({ match }) => {
  const [activeSurveySectionIndex, setActiveSurveySectionIndex] = useState(null)
  const [hasCompletedSurvey, setHasCompletedSurvey] = useState(false)

  return (
    <Query query={SURVEY_QUERY} variables={{ id: 1 }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        const { name, description, surveySections } = data.survey
        return (
          <Layer full>
            <Grid
              areas={[{ name: 'main', start: [0, 0], end: [1, 1] }]}
              columns={['flex']}
              rows={['small', 'xlarge']}
              gap="xlarge"
            >
              <Box
                gridArea="main"
                background="background"
                fill
                pad={{ horizontal: '10rem' }}
              >
                <Layer position="top-right" modal={false}>
                  <Box pad="small" background="background">
                    <Link to="/">
                      <Close />
                    </Link>
                  </Box>
                </Layer>
                <Heading>{name}</Heading>
                <Text>{description}</Text>
                <Box pad={{ horizontal: '10rem' }}>
                  {activeSurveySectionIndex === null && !hasCompletedSurvey && (
                    <Box pad={{ vertical: 'large' }}>
                      <Button
                        primary
                        alignSelf="center"
                        label="Get started"
                        onClick={() => {
                          setActiveSurveySectionIndex(0)
                        }}
                      />
                    </Box>
                  )}
                  {activeSurveySectionIndex !== null && !hasCompletedSurvey && (
                    <SurveySection
                      section={surveySections[activeSurveySectionIndex]}
                      onCompleteSection={() => {
                        const nextActiveSurvey =
                          surveySections[activeSurveySectionIndex + 1]
                        if (nextActiveSurvey) {
                          setActiveSurveySectionIndex(
                            activeSurveySectionIndex + 1
                          )
                        } else {
                          setActiveSurveySectionIndex(null)
                          setHasCompletedSurvey(true)
                        }
                      }}
                    />
                  )}
                  {activeSurveySectionIndex === null && hasCompletedSurvey && (
                    <Text>Congrats! You've completed the survey!</Text>
                  )}
                </Box>
              </Box>
            </Grid>
          </Layer>
        )
      }}
    </Query>
  )
}

export default Survey
