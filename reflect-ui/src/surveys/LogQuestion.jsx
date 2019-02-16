import React from 'react'
import { TextArea } from 'grommet'

const LogQuestion = ({ onChange }) => {
  return (
    <TextArea
      onChange={e => {
        onChange(e.target.value)
      }}
    />
  )
}

export default LogQuestion
