/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Grid } from "@chakra-ui/core"
import Header from "./header"
import Sidebar from "./sidebar"

const Layout = ({ children, type }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  if (type === "1") {
    return (
      <Grid templateRows="auto 1fr auto" style={{ height: "100vh" }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Box as="footer" p={4} textAlign="center" fontWeight="semibold">
          Proyecto Integrador 2019 | ITESM by Andrea Gonzalez Arteaga
        </Box>
      </Grid>
    )
  } else {
    return (
      <Grid templateColumns="auto 1fr" style={{ minHeight: "100vh" }}>
        <Sidebar />
        <main>{children}</main>
      </Grid>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
}

export default Layout
