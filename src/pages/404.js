import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </ThemeProvider>
)

export default NotFoundPage
