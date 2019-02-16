import React from 'react'
import { Box } from 'grommet'

const Sidebar = props => {
  return (
    <Box
      gridArea="sidebar"
      background="sidebar"
      width="small"
      fill="vertical"
      animation={[
        { type: 'fadeIn', duration: 300 },
        { type: 'slideRight', size: 'xlarge', duration: 150 }
      ]}
    >
      <span>Sidebar Content</span>
    </Box>
  )
}

export default Sidebar
