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

const SurveySection = ({
  section: { description, name, surveyQuestions, surveyId },
  onCompleteSection
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const activeQuestion = surveyQuestions[activeQuestionIndex]
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
            const nextActiveQuestion = surveyQuestions[activeQuestionIndex + 1]
            if (nextActiveQuestion) {
              setActiveQuestionIndex(activeQuestionIndex + 1)
            } else {
              onCompleteSection()
              setActiveQuestionIndex(0)
            }
          }}
        />
      )}
    </Box>
  )
}

export default SurveySection
