import React from 'react'
import { Text, RangeInput } from 'grommet'

const RatingQuestion = ({ onChange, value }) => {
  return (
    <div>
      <RangeInput
        max={10}
        min={1}
        value={value}
        onChange={e => {
          onChange(e.target.value)
        }}
      />
      <Text align="center">
        {value ? value : 'Choose from the range above!'}
      </Text>
    </div>
  )
}

export default RatingQuestion
