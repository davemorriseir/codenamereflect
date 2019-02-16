import React from 'react'
import { RadioButtonGroup } from 'grommet'

const ChoiceQuestion = ({ question, onChange, value }) => {
  const { optionsOne, optionsTwo, optionsThree } = question
  return (
    <RadioButtonGroup
      name="choice_options"
      options={[
        { label: optionsOne, value: '3' },
        { label: optionsTwo, value: '7' },
        { label: optionsThree, value: '10' }
      ]}
      value={value}
      onChange={e => {
        onChange(e.target.value)
      }}
    />
  )
}

export default ChoiceQuestion
