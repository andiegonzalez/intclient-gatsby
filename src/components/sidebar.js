import React from "react"
import { Link } from "gatsby"
import { Flex, Box, Icon } from "@chakra-ui/core"
import Avatar from "./avatar"

const Sidebar = () => {
  return (
    <Box bg="blue.500" h="100%">
      <Flex
        as="nav"
        h="100%"
        position="sticky"
        top="0"
        direction="column"
        justifyContent="center"
        alignItems="center"
        p={5}
        fontSize="20px"
        color="white"
        maxH="100vh"
      >
        <Link to="/profile">
          <Avatar initials="AG" />
        </Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/allgoals">Goals</Link>
        <Link
          to="/"
          style={{ position: "absolute", bottom: "5%", fontWeight: "bold" }}
        >
          <Icon name="arrow-back" /> Logout
        </Link>
      </Flex>
    </Box>
  )
}

export default Sidebar
