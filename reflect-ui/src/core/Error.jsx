import React from 'react'
import { Box, Text } from 'grommet'
import { StatusCritical } from 'grommet-icons'

const Error = ({ error }) => {
  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      gap="medium"
    >
      <StatusCritical size="xlarge" />
      <Text alignSelf="center">Something went wrong!!</Text>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </Box>
  )
}

export default Error
