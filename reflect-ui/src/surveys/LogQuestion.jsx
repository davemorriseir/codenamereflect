import React, { useState } from 'react'
import { Box, Button, Text, TextArea } from 'grommet'
import { Mutation } from 'react-apollo'

import { CREATE_SURVEY_ANSWER } from './api/queries'

const LOG = 'log'

const LogQuestion = ({
  question: { questionText, id },
  surveyId,
  onSubmit
}) => {
  const [currentLog, setCurrentLog] = useState(null)

  return (
    <Mutation mutation={CREATE_SURVEY_ANSWER} onCompleted={onSubmit}>
      {(createSurveyAnswer, { data }) => {
        return (
          <Box>
            <Text>{questionText}</Text>
            <TextArea
              onChange={e => {
                setCurrentLog(e.target.value)
              }}
            />
            <Button
              type="button"
              label="Next"
              onClick={() =>
                createSurveyAnswer({
                  variables: {
                    surveyId,
                    surveyQuestionId: id,
                    value: currentLog,
                    answerType: LOG
                  }
                })
              }
            />
          </Box>
        )
      }}
    </Mutation>
  )
}

export default LogQuestion
