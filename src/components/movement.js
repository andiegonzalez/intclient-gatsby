import React, { useState } from "react"
import { Box, Heading } from "@chakra-ui/core"

const Movement = ({ data }) => {
  const [hover, setHover] = useState(false)
  const handleElementHover = () => {
    setHover(!hover)
  }
  return (
    <>
      <tr
        onMouseEnter={handleElementHover}
        onMouseLeave={handleElementHover}
        style={{ position: "relative" }}
      >
        <td>{data.date.toString()}</td>
        <td>{data.account.toString()}</td>
        <td>{data.balance.toString()}</td>
        <td>{data.category.toString()}</td>
        <td>{data.concept.toString()}</td>
        {true && (
          <Box
            style={{
              position: "absolute",
              right: "100px",
              top: "0",
              zIndex: 10,
            }}
          >
            Actions
          </Box>
        )}
      </tr>
    </>
  )
}

export default Movement
