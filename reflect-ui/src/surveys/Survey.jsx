import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Grid, Heading, Paragraph, Layer, Text } from 'grommet'
import { Close } from 'grommet-icons'
import { Query } from 'react-apollo'

import SurveySection from './SurveySection'
import Loading from '../core/Loading'
import Error from '../core/Error'

import { SURVEY_QUERY } from './api/queries'

const Survey = ({ match }) => {
  const [activeSurveySectionIndex, setActiveSurveySectionIndex] = useState(null)
  const [hasCompletedSurvey, setHasCompletedSurvey] = useState(false)

  return (
    <Query query={SURVEY_QUERY} variables={{ id: match.params.surveyId }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <Error error={error} />

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
                <Box
                  pad={{ bottom: 'small' }}
                  margin={{ bottom: 'small' }}
                  border="bottom"
                >
                  <Heading level={3}>{name}</Heading>
                  <Paragraph>{description}</Paragraph>
                </Box>
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
                    <Box>
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
                    </Box>
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
