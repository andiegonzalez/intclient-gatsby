import React from "react"
import { Link } from "gatsby"
import {
  Box,
  Heading,
  Stat,
  StatNumber,
  CircularProgress,
  CircularProgressLabel,
  Grid,
  Flex,
} from "@chakra-ui/core"
// import GoalPage from "../pages/goal"

const GoalCard = ({ goal }) => {
  return (
    <Link to={`/goal`} style={{ height: "auto" }}>
      <Grid
        rounded="lg"
        shadow="md"
        maxWidth="20em"
        ml={8}
        p={4}
        templateRows="5em auto 1fr auto"
        h="100%"
      >
        <img alt="new yourk" />
        <Heading>{goal.name}</Heading>
        <Flex direction="row" alignItems="center">
          <Box maxWidth="60%">
            {" "}
            <p>{goal.description}</p>
          </Box>
          <CircularProgress
            value={goal.progress}
            color="blue"
            maxW="5em"
            w="auto"
            h="auto"
            thickness={0.4}
          >
            <CircularProgressLabel textAlign="center" fontWeight="bold">
              <p style={{ fontSize: "1.5em" }}>{goal.progress}%</p>
              <p>${goal.targetAmount}</p>
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Stat p={0} textAlign="center">
          <StatNumber>${goal.balance}</StatNumber>
        </Stat>
      </Grid>
    </Link>
  )
}

export default GoalCard
