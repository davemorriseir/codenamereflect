import React from 'react'
import { Box, Heading, Text } from 'grommet'

import Question from './Question'

import useListTracker from './hooks/useListTracker'

const SurveySection = ({
  section: { description, name, surveyQuestions, surveyId },
  onCompleteSection
}) => {
  const [activeQuestionIndex, handleNextQuestion] = useListTracker(
    surveyQuestions,
    onCompleteSection
  )
  const activeQuestion = surveyQuestions[activeQuestionIndex]

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
          current={activeQuestionIndex + 1}
          total={surveyQuestions.length}
          question={activeQuestion}
          surveyId={surveyId}
          onSubmit={() =>
            handleNextQuestion(activeQuestionIndex + 1, surveyQuestions)
          }
        />
      )}
    </Box>
  )
}

export default SurveySection
