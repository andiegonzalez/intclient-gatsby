import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"
import { Button, Grid, Heading, Flex, Box } from "@chakra-ui/core"

const WelcomePage = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />

      <Layout type="1">
        <SEO title="Finance Tracker | Inicio" />
        <Grid
          templateColumns="1fr 1fr"
          templateRows="1fr auto"
          alignItems="center"
          px={10}
        >
          <Heading style={{ fontSize: "3em" }} fontWeigh="black">
            Todas tus finanzas, {<br />}en un solo lugar
          </Heading>
          <Box maxW="80%">
            <Image img="illustration" />
          </Box>
          <Flex py={4} justify="stretch" style={{ gridColumn: "1 / 3" }}>
            <Button as="a" href="/login" variantColor="blue" w="50%" mx={2}>
              Log In
            </Button>
            <Button
              as="a"
              href="/newaccount"
              variantColor="blue"
              w="50%"
              mx={2}
            >
              Sign Up
            </Button>
          </Flex>
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default WelcomePage
