import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from 'theme-ui'
import { toTheme } from '@theme-ui/typography'
import typography from "../utils/typography"
import Grid from 'react-css-grid'
import Introduction from "../chapters/introduction"

const theme = toTheme(typography)

export default props => (
  <ThemeProvider theme={theme}>
    <Grid
      width={800}
      gap={16}>
        <Introduction />
    </Grid>
  </ThemeProvider>
)

// const Container = styled.div({
//   max
// })
 