import React, { useState } from "react"
import { Box, Heading } from "@chakra-ui/core"

import Table from "./table"
import Movement from "./movement"

const Movements = () => {
  const data = [
    {
      account: "cuenta1",
      balance: 300.45,
      date: new Date(),
      concept: "new concept",
      category: "cat1",
    },
    {
      account: "cuenta1",
      balance: 300.45,
      date: new Date(),
      concept: "new concept",
      category: "cat1",
    },
    {
      account: "cuenta1",
      balance: 300.45,
      date: new Date(),
      concept: "new concept",
      category: "cat1",
    },
    {
      account: "cuenta1",
      balance: 300.45,
      date: new Date(),
      concept: "new concept",
      category: "cat1",
    },
  ]
  return (
    <Box px={8} py={4} gridColumn="1/3">
      <Heading color="blue.600" fontSize="2em" mb={2}>
        Movements
      </Heading>
      <Table headings={["Date", "Concept", "Account", "Category", "Amount"]}>
        {data.map((item, index) => (
          <Movement data={item} key={index} />
        ))}
      </Table>
    </Box>
  )
}

export default Movements
