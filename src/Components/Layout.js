import React from 'react'
import { Box } from '@mui/material'

function Layout() {
  return (
   <>
    <Box>
          <Box className="bubble bubble1" />
          <Box className="bubble bubble2" />
          <Box className="bubble bubble3" />
          <Box className="bubble bubble4" />
          <Box className="bubble bubble5" />
          <Box className="bubble bubble3" />
        </Box>
        {/* corner */}
        <Box
          sx={{
            content: '""',
            position: "absolute",
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 0 60px 60px",
            borderColor: "transparent transparent #f5f5dc transparent",
            top: 0,
            right: 0,
            zIndex: 1,
            transform: "rotate(90deg)"
          }}
        />
    </>
  )
}

export default Layout