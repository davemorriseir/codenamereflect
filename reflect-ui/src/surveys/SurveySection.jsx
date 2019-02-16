import React from 'react'
import { Box, Heading, Text } from 'grommet'

import Question from './Question'
import useSafeArrayIndexTracker from './hooks/useSafeArrayIndexTracker'
import {
  surveySectionIn,
  surveySectionTitleIn,
  surveySectionDescriptionIn
} from './animations'

const SurveySection = ({
  section: { description, title, surveyQuestions, surveyId },
  onCompleteSection
}) => {
  const [activeQuestionIndex, handleNextQuestion] = useSafeArrayIndexTracker(
    surveyQuestions,
    onCompleteSection
  )
  const activeQuestion = surveyQuestions[activeQuestionIndex]

  return (
    <Box
      background={{ color: 'light-2', opacity: 'strong' }}
      round
      pad="medium"
      animation={surveySectionIn}
    >
      <Box animation={surveySectionTitleIn}>
        <Heading size="small">{title}</Heading>
      </Box>
      <Box animation={surveySectionDescriptionIn}>
        <Text>{description}</Text>
      </Box>
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
