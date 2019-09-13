import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"
import { Button, Grid, Heading } from "@chakra-ui/core"

const WelcomePage = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout>
      <SEO title="Finance Tracker | Inicio" />
      <Grid templateColumns="1fr 1fr">
        <Heading>Todas tus finanzas, {<br />}en un solo lugar</Heading>
        <div>{/*illustration*/}</div>
      </Grid>
      <Button variantColor="blue">Log In</Button>
      <Button variantColor="blue">Sign Up</Button>
    </Layout>
  </ThemeProvider>
)

export default WelcomePage
