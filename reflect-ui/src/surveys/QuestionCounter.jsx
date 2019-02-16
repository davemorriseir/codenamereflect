import React from 'react'
import { Text } from 'grommet'

const QuestionCounter = ({ current, total }) => {
  return (
    <Text alignSelf="start">
      Questions: {current}/{total}
    </Text>
  )
}

export default QuestionCounter
