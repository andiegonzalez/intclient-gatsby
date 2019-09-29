import React from "react"
import { Box, Grid } from "@chakra-ui/core"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Balance from "../components/balance"
import Expenses from "../components/expenses"
import Movements from "../components/movements"
import SEO from "../components/seo"
import Image from "../components/image"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"

const Dashboard = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout type="2">
        <SEO title="Finance Tracker | Dashboard" />
        <Grid templateRows="auto 1fr" templateColumns="2fr 3fr">
          <Balance></Balance>
          <Expenses></Expenses>
          <Movements></Movements>
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default Dashboard
