import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"
import {
  FormControl,
  FormLabel,
  Heading,
  Button,
  Input,
  Grid,
  Box,
} from "@chakra-ui/core"

const handleRecoverForm = event => {
  event.preventDefault()
  console.log("recoverattempt")
}
const ForgotPage = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout type="1">
      <SEO title="Finance Tracker | Recover Password" />

      <Grid
        templateColumns="1fr 1fr"
        gridGap={10}
        alignItems="center"
        px={10}
        h="100%"
      >
        <Box>
          <Heading>Forgot Password</Heading>
          <form onSubmit={handleRecoverForm}>
            <FormControl>
              <FormLabel htmlFor="email" mt={2} mb={0} p={0}>
                Email address
              </FormLabel>
              <Input type="email" id="email" />
            </FormControl>
            <Button type="submit" variantColor="blue" w="100%" mt={4}>
              Recover Password
            </Button>
          </form>
        </Box>
        <Box maxW="80%">
          <Image img="illustration" />
        </Box>
      </Grid>
    </Layout>
  </ThemeProvider>
)

export default ForgotPage
