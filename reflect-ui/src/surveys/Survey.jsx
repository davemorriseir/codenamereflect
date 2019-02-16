import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  Grid,
  Heading,
  Paragraph,
  Layer,
  Text,
  ThemeContext
} from 'grommet'
import { Close } from 'grommet-icons'
import { Query } from 'react-apollo'

import Loading from '../core/Loading'
import Error from '../core/Error'

import SurveySection from './SurveySection'

import useListTracker from './hooks/useListTracker'

import { SURVEY_QUERY } from './api/queries'

const Survey = ({ match }) => {
  const [hasCompletedSurvey, setHasCompletedSurvey] = useState(false)
  const [
    activeSurveySectionIndex,
    setActiveSurveySectionIndex
  ] = useListTracker(false, () => {
    setHasCompletedSurvey(true)
  })

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
              <ThemeContext.Extend
                value={{
                  heading: {
                    extend: {
                      marginBlockEnd: '10px'
                    }
                  }
                }}
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
                            setActiveSurveySectionIndex(0, surveySections)
                          }}
                        />
                      </Box>
                    )}
                    {activeSurveySectionIndex !== null &&
                      !hasCompletedSurvey && (
                        <SurveySection
                          section={surveySections[activeSurveySectionIndex]}
                          onCompleteSection={() =>
                            setActiveSurveySectionIndex(
                              activeSurveySectionIndex + 1,
                              surveySections
                            )
                          }
                        />
                      )}
                    {activeSurveySectionIndex === null &&
                      hasCompletedSurvey && (
                        <Text>Congrats! You've completed the survey!</Text>
                      )}
                  </Box>
                </Box>
              </ThemeContext.Extend>
            </Grid>
          </Layer>
        )
      }}
    </Query>
  )
}

export default Survey
