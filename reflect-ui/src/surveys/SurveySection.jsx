import React, { useState } from 'react'
import { Box, Button, Heading, Text } from 'grommet'

import LogQuestion from './LogQuestion'
import ChoiceQuestion from './ChoiceQuestion'
import RatingQuestion from './RatingQuestion'

const QUESTION_COMPONENT_CONFIG = {
  SurveyChoiceQuestion: ChoiceQuestion,
  SurveyRatingQuestion: RatingQuestion,
  SurveyLogQuestion: LogQuestion
}

const Survey = ({
  section: { description, name, surveyQuestions, surveyId },
  onCancel,
  onCompleteSection,
  match
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const activeQuestion = surveyQuestions[activeQuestionIndex]
  if (!activeQuestion) {
    onCompleteSection()
    return null
  }

  const Question = QUESTION_COMPONENT_CONFIG[activeQuestion.type]

  return (
    <Box
      background={{ color: 'light-2', opacity: 'strong' }}
      round
      pad="medium"
    >
      <Heading size="small">{name}</Heading>
      <Text>{description}</Text>
      {activeQuestion && (
        <Question
          question={activeQuestion}
          surveyId={surveyId}
          onSubmit={() => {
            setActiveQuestionIndex(activeQuestionIndex + 1)
          }}
        />
      )}
      {/* <Button label="Cancel" color="accent-1" type="reset" onClick={onCancel} /> */}
    </Box>
  )
}

export default Survey
