import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image.js"
import { Box } from "@chakra-ui/core"
const style = {
  padding: "1rem",
}
const Header = ({ siteTitle }) => (
  <Box as="header" px={10} py={4}>
    <Link to="/">
      <Image img="logo" />
    </Link>
    {/*<Link style={style} to="/welcome">
      welcome
    </Link>
    <Link style={style} to="/login">
      login
    </Link>
    <Link style={style} to="/newaccount">
      new account
    </Link>
    <Link style={style} to="/forgot">
      forgot
    </Link>
    <Link style={style} to="/setup">
      setup
    </Link>
    <Link style={style} to="/styleguide">
      styles
    </Link>*/}
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
