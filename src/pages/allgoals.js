import React from "react"
import { Box, Heading, Flex } from "@chakra-ui/core"
import Layout from "../components/layout"
import GoalCard from "../components/goalcard"
import SEO from "../components/seo"
import { Router } from "@reach/router"
import GoalPage from "./goal"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"

const AllGoals = () => {
  const goalArray = [
    {
      id: "1",
      name: "iPad Nueva",
      description:
        "iPad nueva gen. 9.8in 256GB Apple PenciliPad nueva gen. 9.8in 256GB Apple PenciliPad nueva gen. 9.8in 256GB",
      targetAmount: 20000,
      balance: 19000,
      progress: 80,
    },
    {
      id: "2",
      name: "viaje a ny",
      description: "iPad nueva gen. 9.8in 256GB Apple Pencil",
      targetAmount: 25000,
      balance: 18000,
      progress: 75,
    },
  ]
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout type="2">
        <Router>
          <GoalPage path="/goal/:id" anotherprop={342} />
        </Router>
        <SEO title="Finance Tracker | Goals" />
        <Box px={8} py={4}>
          <Heading color="blue.600" fontSize="2em">
            Goals
          </Heading>
        </Box>
        <Flex justifyContent="stretch">
          {goalArray.map(goal => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </Flex>
      </Layout>
    </ThemeProvider>
  )
}

export default AllGoals
