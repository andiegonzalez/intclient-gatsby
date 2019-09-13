import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Button,
  Input,
  Link,
  Grid,
} from "@chakra-ui/core"

const handleLoginForm = event => {
  event.preventDefault()
  console.log("loginattempt")
}
const inputStyle = {
  border: "3px solid #2168DD",
}
const handleForgotClick = event => {
  event.preventDefault()
  console.log("forgot")
}
const LoginPage = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout>
      <SEO title="Finance Tracker | Log In" />
      <Heading>Log In</Heading>
      <Grid templateColumns="1fr 1fr">
        <div>
          <form onSubmit={handleLoginForm}>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input style={inputStyle} type="email" id="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input style={inputStyle} type="password" id="password" />
            </FormControl>
            <Link onClick={handleForgotClick}>¿Olvidaste tu contraseña?</Link>
            <Button type="submit" variantColor="blue">
              Log In
            </Button>
          </form>
          <hr />
          <Button variantColor="red">Iniciar Sesión con Google</Button>
          <Button variantColor="blue">Iniciar Sesión con Facebook</Button>
        </div>
        <div>{/*illustration*/}</div>
      </Grid>
    </Layout>
  </ThemeProvider>
)

export default LoginPage
