import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from 'theme-ui'
import Grid from 'react-css-grid'
import theme from "../gatsby-plugin-theme-ui"
import Introduction from "../chapters/introduction"
import {Box} from "rebass"

export default props => (
  <ThemeProvider theme={theme}>
    <Box
  sx={{
    maxWidth: 600,
    mx: 'auto',
    px: 3,
  }}>
    <Introduction />
</Box>
    
  </ThemeProvider>
)
 