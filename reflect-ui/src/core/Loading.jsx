import React from 'react'
import { Box } from 'grommet'
import { Update } from 'grommet-icons'

const Loading = () => {
  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      gap="medium"
    >
      <Update size="xlarge" />
    </Box>
  )
}

export default Loading
