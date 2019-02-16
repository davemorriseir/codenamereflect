import React, { useState } from 'react'
import { Box, Button, Text, RangeInput } from 'grommet'
import { FormNext } from 'grommet-icons'
import { Mutation } from 'react-apollo'

import { CREATE_SURVEY_ANSWER } from './api/queries'

const RATING = 'rating'

const RatingQuestion = ({
  question: { questionText, id },
  surveyId,
  onSubmit
}) => {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <Mutation mutation={CREATE_SURVEY_ANSWER} onCompleted={onSubmit}>
      {(createSurveyAnswer, { data }) => {
        return (
          <Box>
            <Text>{questionText}</Text>
            <Box pad={{ vertical: 'small' }}>
              <RangeInput
                max={10}
                min={1}
                value={selectedOption}
                onChange={e => {
                  setSelectedOption(e.target.value)
                }}
              />
              <Text align="center">
                {selectedOption
                  ? selectedOption
                  : 'Choose from the range above!'}
              </Text>
            </Box>
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
