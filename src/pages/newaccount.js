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

const handleCreateAccountForm = event => {
  event.preventDefault()
  console.log("creationaccountattempt")
}
const LoginPage = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout type="1">
      <SEO title="Finance Tracker | Create New Account" />
      <Grid templateColumns="1fr 1fr" gridGap={10} alignItems="center" px={10}>
        <Box>
          <Heading>Create New Account</Heading>
          <form onSubmit={handleCreateAccountForm}>
            <FormControl>
              <FormLabel htmlFor="username" mt={2} mb={0} p={0}>
                Username
              </FormLabel>
              <Input type="text" id="username" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email" mt={2} mb={0} p={0}>
                Email Address
              </FormLabel>
              <Input type="email" id="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" mt={2} mb={0} p={0}>
                Password
              </FormLabel>
              <Input type="password" id="password" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="confirmPassword" mt={2} mb={0} p={0}>
                Confirm Password
              </FormLabel>
              <Input type="password" id="confirmPassword" />
            </FormControl>
            <Button type="submit" variantColor="blue" w="100%" mt={4}>
              Create New Account
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

export default LoginPage
