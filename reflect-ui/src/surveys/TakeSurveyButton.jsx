import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Text } from 'grommet'
import { Task } from 'grommet-icons'

const TakeSurveyButton = () => {
  return (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      gap="medium"
    >
      <Box
        pad="large"
        align="center"
        background={{ color: 'light-2', opacity: 'strong' }}
        round
        alignSelf="center"
        gap="small"
      >
        <Task size="large" />
        <Text>Take Survey</Text>
        <Link to="/surveys/1">
          <Button label="Let's Go!" />
        </Link>
      </Box>
    </Box>
  )
}

export default TakeSurveyButton
