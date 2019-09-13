import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image.js"
import { Box, Heading } from "@chakra-ui/core"

const Header = ({ siteTitle }) => (
  <Box as="header" p="4">
    <Heading>
      <Link to="/">{/* <svg url="../images/logo.svg" />*/}</Link>
    </Heading>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
