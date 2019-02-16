import React, { useState } from 'react'
import { Box, Button, Text, RangeInput } from 'grommet'
import { Mutation } from 'react-apollo'

import { CREATE_SURVEY_ANSWER } from './api/queries'

const RATING = 'rating'

const RatingQuestion = ({
  question: { questionText, id },
  surveyId,
  onSubmit
}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const ratingOptions = Array.from({ length: 10 }, (val, key) =>
    String(key + 1)
  )

  return (
    <Mutation mutation={CREATE_SURVEY_ANSWER} onCompleted={onSubmit}>
      {(createSurveyAnswer, { data }) => {
        return (
          <Box>
            <Text>{questionText}</Text>
            <RangeInput
              max={10}
              min={1}
              value={selectedOption}
              onChange={e => {
                setSelectedOption(e.target.value)
              }}
            />
            <Text align="center">
              {selectedOption ? selectedOption : 'Choose from the range above!'}
            </Text>
            <Button
              type="button"
              label="Next"
              onClick={() =>
                createSurveyAnswer({
                  variables: {
                    surveyId,
                    surveyQuestionId: id,
                    value: selectedOption,
                    answerType: RATING
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

export default RatingQuestion
