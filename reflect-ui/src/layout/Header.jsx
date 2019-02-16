import React from 'react'
import { Heading, Box } from 'grommet'

const Header = props => {
  return (
    <Box
      gridArea="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: 'medium' }}
      background="header"
    >
      <Heading level={4}>Codename Reflect</Heading>
    </Box>
  )
}

export default Header
