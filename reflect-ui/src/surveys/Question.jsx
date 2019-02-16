import React, { useState, useEffect } from 'react'
import { Box, Button, Text, Grid } from 'grommet'
import { FormNext } from 'grommet-icons'
import { Mutation } from 'react-apollo'

import { CREATE_SURVEY_ANSWER } from './api/queries'

import LogQuestion from './LogQuestion'
import ChoiceQuestion from './ChoiceQuestion'
import RatingQuestion from './RatingQuestion'
import QuestionCounter from './QuestionCounter'

const QUESTION_COMPONENT_CONFIG = {
  SurveyChoiceQuestion: {
    component: ChoiceQuestion,
    answerType: 'choice'
  },
  SurveyRatingQuestion: {
    component: RatingQuestion,
    answerType: 'rating'
  },
  SurveyLogQuestion: {
    component: LogQuestion,
    answerType: 'log'
  }
}

const Question = ({ question, surveyId, current, total, onSubmit }) => {
  const [currentValue, setCurrentValue] = useState(null)
  useEffect(() => {
    return () => {
      setCurrentValue(null)
    }
  }, [question])

  const { component: Question, answerType } = QUESTION_COMPONENT_CONFIG[
    question.type
  ]

  return (
    <Mutation mutation={CREATE_SURVEY_ANSWER} onCompleted={onSubmit}>
      {(createSurveyAnswer, { data }) => {
        const { id, questionText } = question
        return (
          <Box>
            <Text>{questionText}</Text>
            <Box pad={{ vertical: 'small' }}>
              <Question
                question={question}
                value={currentValue}
                onChange={setCurrentValue}
              />
            </Box>
            <Grid
              columns={['flex', 'flex']}
              rows={['flex']}
              areas={[
                { name: 'counter', start: [0, 0], end: [1, 0] },
                { name: 'next', start: [1, 0], end: [2, 0] }
              ]}
              gap="medium"
            >
              <Box girdArea="counter">
                <QuestionCounter current={current} total={total} />
              </Box>
              <Box gridArea="next">
                <Button
                  primary
                  icon={<FormNext />}
                  reverse
                  alignSelf="end"
                  label="Next"
                  onClick={() =>
                    createSurveyAnswer({
                      variables: {
                        surveyId,
                        surveyQuestionId: id,
                        value: currentValue,
                        answerType: answerType
                      }
                    })
                  }
                />
              </Box>
            </Grid>
          </Box>
        )
      }}
    </Mutation>
  )
}

export default Question
