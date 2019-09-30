import React from "react"
import Table from "./table"
import { Box, Heading, Grid, Flex } from "@chakra-ui/core"

const Expenses = () => {
  const dummyRowData = [
    {
      account: "cuenta1",
      balance: 300.45,
    },
    {
      account: "cuenta2",
      balance: 50.45,
    },
    {
      account: "cuenta1",
      balance: 706,
    },
    {
      account: "cuenta2",
      balance: 50.45,
    },
    {
      account: "cuenta1",
      balance: 706,
    },
    {
      account: "cuenta2",
      balance: 50.45,
    },
    {
      account: "cuenta1",
      balance: 706,
    },
  ]
  const totalAmount = 30299
  return (
    <Flex pr={8} py={4} direction="column" justifyContent="space-between">
      <Heading color="blue.600" fontSize="2em">
        Expenses
      </Heading>
      <Grid templateColumns="auto 1fr" gridGap="2em">
        <Box mt={10} w="200px" h="200px" borderRadius="50%" bg="blue.500"></Box>
        <Table
          headings={["Categories", "Amount"]}
          rows={dummyRowData}
          total={totalAmount}
          style={{ alignSelf: "flex-end" }}
        />
      </Grid>
    </Flex>
  )
}

export default Expenses
