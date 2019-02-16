import React, { useState } from 'react'
import { Box, Button, Text, RadioButtonGroup } from 'grommet'
import { Mutation } from 'react-apollo'

import { CREATE_SURVEY_ANSWER } from './api/queries'

const CHOICE = 'choice'

const ChoiceQuestion = ({
  question: { questionText, id, optionsOne, optionsTwo, optionsThree },
  surveyId,
  onSubmit
}) => {
  const [selectedOption, setSelectedOption] = useState('3')

  return (
    <Mutation mutation={CREATE_SURVEY_ANSWER} onCompleted={onSubmit}>
      {(createSurveyAnswer, { data }) => {
        return (
          <Box>
            <Text>{questionText}</Text>
            <RadioButtonGroup
              name="choice_options"
              options={[
                { label: optionsOne, value: '3' },
                { label: optionsTwo, value: '7' },
                { label: optionsThree, value: '10' }
              ]}
              value={selectedOption}
              onChange={e => {
                setSelectedOption(e.target.value)
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
                    value: selectedOption,
                    answerType: CHOICE
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

export default ChoiceQuestion