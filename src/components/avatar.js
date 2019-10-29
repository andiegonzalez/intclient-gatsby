import React from "react"
import { Box } from "@chakra-ui/core"

const Avatar = ({ initials }) => {
  return (
    <Box
      p={4}
      bg="white"
      color="blue.500"
      rounded="50%"
      fontSize="30px"
      fontWeight="bold"
      my={3}
    >
      <span>{initials}</span>
    </Box>
  )
}

export default Avatar
