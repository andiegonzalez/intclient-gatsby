import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Button,
  Input,
  Grid,
} from "@chakra-ui/core"

const handleCreateAccountForm = event => {
  event.preventDefault()
  console.log("creationaccountattempt")
}
const inputStyle = {
  border: "3px solid #2168DD",
}
const LoginPage = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout>
      <SEO title="Finance Tracker | Create New Account" />
      <Heading>Create New Account</Heading>
      <Grid templateColumns="1fr 1fr">
        <div>
          <form onSubmit={handleCreateAccountForm}>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input style={inputStyle} type="text" id="username" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input style={inputStyle} type="email" id="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input style={inputStyle} type="password" id="password" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <Input style={inputStyle} type="password" id="confirmPassword" />
            </FormControl>
            <Button type="submit" variantColor="blue">
              Create New Account
            </Button>
          </form>
        </div>
        <div>{/*illustration*/}</div>
      </Grid>
    </Layout>
  </ThemeProvider>
)

export default LoginPage
