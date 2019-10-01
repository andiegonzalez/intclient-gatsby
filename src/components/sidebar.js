import React from "react"
import { Link } from "gatsby"
import { Flex } from "@chakra-ui/core"

const Sidebar = () => {
  return (
    <Flex
      as="nav"
      bg="blue.500"
      h="100%"
      d="column"
      justifyItems="center"
      alignItems="center"
    >
      <Link to="/profile">Avatar</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/goals">Goals</Link>
    </Flex>
  )
}

export default Sidebar
