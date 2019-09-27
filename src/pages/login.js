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

const handleLoginForm = event => {
  event.preventDefault()
  console.log("loginattempt")
}
const LoginPage = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout>
      <SEO title="Finance Tracker | Log In" />
      <Grid
        templateColumns="1fr 1fr"
        gridGap={10}
        alignItems="center"
        px={10}
        h="100%"
      >
        <Box>
          <Heading>Log In</Heading>
          <form onSubmit={handleLoginForm}>
            <FormControl>
              <FormLabel htmlFor="email" mt={2} mb={0} p={0}>
                Email address
              </FormLabel>
              <Input type="email" id="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" mt={2} mb={0} p={0}>
                Password
              </FormLabel>
              <Input type="password" id="password" />
            </FormControl>
            <Button
              as="a"
              href="/forgot"
              variant="link"
              variantColor="blue"
              fontWeight="regular"
              mt={2}
            >
              ¿Olvidaste tu contraseña?
            </Button>
            <Button type="submit" variantColor="blue" w="100%" mt={4}>
              Log In
            </Button>
          </form>
          <hr style={{ margin: "1.5rem 0" }} />
          <Grid templateColumns="1fr 1fr">
            <Button variantColor="red">Iniciar Sesión con Google</Button>
            <Button variantColor="blue" ml={2}>
              Iniciar Sesión con Facebook
            </Button>
          </Grid>
        </Box>
        <Box maxW="80%">
          <Image img="illustration" />
        </Box>
      </Grid>
    </Layout>
  </ThemeProvider>
)

export default LoginPage
