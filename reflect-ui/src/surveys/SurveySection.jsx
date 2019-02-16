import React, { useState } from 'react'
import { Box, Heading, Text } from 'grommet'

import Question from './Question'

const SurveySection = ({
  section: { description, name, surveyQuestions, surveyId },
  onCompleteSection
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
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
