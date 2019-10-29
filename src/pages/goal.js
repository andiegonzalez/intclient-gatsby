import React from "react"
import {
  Box,
  Button,
  Icon,
  Heading,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Grid,
} from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import GoalMovement from "../components/goalmovement"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"

const dummyRowData = [
  {
    date: new Date(),
    category: "cat1",
    amount: 435.4,
  },
  {
    date: new Date(),
    category: "cat1",
    amount: 435.4,
  },
  {
    date: new Date(),
    category: "cat1",
    amount: 435.4,
  },
  {
    date: new Date(),
    category: "cat1",
    amount: 435.4,
  },
]

const GoalPage = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout type="2">
        <SEO title="Finance Tracker | Goal" />
        <Box as="section">
          <Heading color="blue.600" fontSize="2em">
            Goal Name
          </Heading>
          <p>Goal Description</p>
          <p>
            <strong>Goal date: DATE</strong>
          </p>
          <Grid templateColumns="1fr auto">
            <Table
              headings={["Date", "Category", "Balance"]}
              rows={dummyRowData}
              movement
              total="100"
            >
              {dummyRowData.map((i, index) => (
                <GoalMovement key={index} data={i} />
              ))}
            </Table>
            <CircularProgress
              value={50}
              color="blue"
              maxW="5em"
              w="auto"
              h="auto"
              thickness={0.4}
            >
              <CircularProgressLabel textAlign="center" fontWeight="bold">
                <p style={{ fontSize: "1.5em" }}>{50}%</p>
                <p>${100}</p>
              </CircularProgressLabel>
            </CircularProgress>
          </Grid>
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default GoalPage
