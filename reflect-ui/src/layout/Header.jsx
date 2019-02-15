import React from 'react'
import { Heading, Box } from 'grommet'

const Header = props => {
  return (
    <Box
      gridArea="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: 'medium', vertical: 'small' }}
      background="dark-2"
    >
      <Heading>Codename Reflect</Heading>
    </Box>
  )
}

export default Header
