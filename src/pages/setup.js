import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"
import { Heading, Button, Link, Input, Stack } from "@chakra-ui/core"

const handleAddAccount = event => {
  event.preventDefault()
  console.log("addacc")
}
const inputStyle = {
  border: "3px solid #2168DD",
}
const SetupPage = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        <Heading>Configue your account</Heading>
        {/*stepper*/}
        <p>description</p>
        <Stack spacing={2} maxW="half">
          <Input type="text" style={inputStyle} />
          <Button leftIcon="add" variant="link" onClick={handleAddAccount}>
            New Account
          </Button>
        </Stack>
        <Button rightIcon="arrow-forward" variantColor="blue">
          Siguiente
        </Button>
      </Layout>
    </ThemeProvider>
  )
}

export default SetupPage
