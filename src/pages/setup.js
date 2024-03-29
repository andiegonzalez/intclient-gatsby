import React from "react"
import Layout from "../components/layout"
import Stepper from "../components/stepper"
// import SEO from "../components/seo"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"
import { Heading, Grid } from "@chakra-ui/core"

const SetupPage = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout type="1">
        <Grid templateRows="1fr auto" alignItems="center" px={10} maxW="70%">
          <Heading>Configure your account</Heading>
          <Stepper />
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default SetupPage
