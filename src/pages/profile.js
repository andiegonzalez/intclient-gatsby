import React from "react"
import { Box, Button, Icon, Heading, Text } from "@chakra-ui/core"
import Layout from "../components/layout"
import Accounts from "../components/accounts"
import Categories from "../components/categories"
import SEO from "../components/seo"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"

const Profile = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout type="2">
        <SEO title="Finance Tracker | Profile" />
        <Box as="section">
          <Heading as="h2">PinkElephant</Heading>
          <Button>
            <Icon name="edit" />
          </Button>
          <Text>a.gzzart@gmail.com</Text>
        </Box>
        <Accounts />
        <Categories />
      </Layout>
    </ThemeProvider>
  )
}

export default Profile
