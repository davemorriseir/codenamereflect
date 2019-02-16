import React, { useState } from 'react'
import { Box, Button, Grid, Heading, Layer, Text } from 'grommet'
import { Query } from 'react-apollo'

import SurveySection from './SurveySection'

import { SURVEY_QUERY } from './api/queries'

const Survey = ({ match }) => {
  const [activeSurveySection, setActiveSurveySection] = useState(null)
  const [hasCompletedSurvey, setHasCompletedSurvey] = useState(false)

  return (
    <Query query={SURVEY_QUERY} variables={{ id: 1 }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        const { name, description } = data.survey
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
                <Heading>{name}</Heading>
                <Text>{description}</Text>
                <Box pad={{ horizontal: '10rem' }}>
                  {!activeSurveySection && !hasCompletedSurvey && (
                    <Button
                      label="Get started"
                      onClick={() => {
                        setActiveSurveySection(data.survey.surveySections[0])
                      }}
                    />
                  )}
                  {activeSurveySection && !hasCompletedSurvey && (
                    <SurveySection
                      section={activeSurveySection}
                      onCompleteSection={() => {
                        const nextActiveSurvey =
                          data.survey.surveySections[
                            activeSurveySection.position + 1
                          ]
                        if (nextActiveSurvey) {
                          setActiveSurveySection(nextActiveSurvey)
                        } else {
                          setActiveSurveySection(null)
                          setHasCompletedSurvey(true)
                        }
                      }}
                      onCancel={() => {
                        setActiveSurveySection(null)
                      }}
                    />
                  )}
                  {!activeSurveySection && hasCompletedSurvey && (
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
