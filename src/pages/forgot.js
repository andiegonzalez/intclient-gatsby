import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"
import {
  FormControl,
  FormLabel,
  Heading,
  Button,
  Input,
  Grid,
} from "@chakra-ui/core"

const handleRecoverForm = event => {
  event.preventDefault()
  console.log("recoverattempt")
}
const inputStyle = {
  border: "3px solid #2168DD",
}
const ForgotPage = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout>
      <SEO title="Finance Tracker | Recover Password" />
      <Heading>Forgot Password</Heading>
      <Grid templateColumns="1fr 1fr">
        <div>
          <form onSubmit={handleRecoverForm}>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input style={inputStyle} type="email" id="email" />
            </FormControl>
            <Button type="submit" variantColor="blue">
              Recover Password
            </Button>
          </form>
        </div>
        <div>{/*illustration*/}</div>
      </Grid>
    </Layout>
  </ThemeProvider>
)

export default ForgotPage
