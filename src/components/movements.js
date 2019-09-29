import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import Table from "./table"

const Movements = () => {
  const dummyRowData = [
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
      <Heading color="blue.600" fontSize="2em">
        Movements
      </Heading>
      <Table
        headings={["Date", "Concept", "Account", "Category", "Amount"]}
        rows={dummyRowData}
      />
    </Box>
  )
}

export default Movements
