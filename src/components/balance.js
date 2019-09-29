import React from "react"
import Table from "./table"
import { Box, Heading, Stat, StatLabel, StatNumber } from "@chakra-ui/core"

const Balance = () => {
  {
    /*get table data query*/
  }
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
  ]
  return (
    <Box px={8} py={4}>
      <Heading color="blue.600" fontSize="2em">
        Balance
      </Heading>
      <Stat>
        <StatLabel>Total</StatLabel>
        <StatNumber>$700MXN</StatNumber>
      </Stat>
      <Table headings={["Account", "Balance"]} rows={dummyRowData} />
    </Box>
  )
}

export default Balance
