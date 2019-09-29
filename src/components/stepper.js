import React, { useState } from "react"
import { Box, Grid, Icon, Flex } from "@chakra-ui/core"
import Accounts from "./accounts"
import Categories from "./categories"
import FirstGoal from "./firstgoal"

const Stepper = () => {
  const [step, setStep] = useState(1)
  const nextStep = () => {
    setStep(step => step + 1)
  }
  const prevStep = () => {
    setStep(step => step - 1)
  }
  if (step === 1) {
    return (
      <Box mx="auto">
        <Grid
          templateColumns="1fr 1fr 1fr 1fr 1fr"
          justifyContent="center"
          alignItems="center"
        >
          <Flex d="row" alignItems="center">
            <Box
              bg="green.400"
              borderRadius={50}
              p={2}
              mr={2}
              w="40px"
              h="40px"
            >
              <Icon name="moon" size="20px" color="green.800" />
            </Box>
            <span style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Accounts
            </span>
          </Flex>
          <hr style={{ display: "inline", width: "80%" }} />
          <Flex d="row" alignItems="center">
            <Box bg="gray.300" borderRadius={50} p={2} mr={2} w="40px" h="40px">
              <Icon name="moon" size="20px" color="gray.800" />
            </Box>
            <span style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Categories
            </span>
          </Flex>
          <hr style={{ display: "inline", width: "80%" }} />
          <Flex d="row" alignItems="center">
            <Box bg="gray.300" borderRadius={50} p={2} mr={2} w="40px" h="40px">
              <Icon name="moon" size="20px" color="gray.800" />
            </Box>
            <span style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              First Goal
            </span>
          </Flex>
        </Grid>
        <Accounts nextStep={nextStep} prevStep={prevStep} />
      </Box>
    )
  }
  if (step === 2) {
    return (
      <Box mx="auto">
        <Grid
          templateColumns="1fr 1fr 1fr 1fr 1fr"
          justifyContent="center"
          alignItems="center"
        >
          <Flex d="row" alignItems="center">
            <Box bg="blue.400" borderRadius={50} p={2} mr={2} w="40px" h="40px">
              <Icon name="moon" size="20px" color="blue.800" />
            </Box>
            <span style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Accounts
            </span>
          </Flex>
          <hr style={{ display: "inline", width: "80%" }} />
          <Flex d="row" alignItems="center">
            <Box
              bg="green.400"
              borderRadius={50}
              p={2}
              mr={2}
              w="40px"
              h="40px"
            >
              <Icon name="moon" size="20px" color="green.800" />
            </Box>
            <span style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Categories
            </span>
          </Flex>
          <hr style={{ display: "inline", width: "80%" }} />
          <Flex d="row" alignItems="center">
            <Box bg="gray.300" borderRadius={50} p={2} mr={2} w="40px" h="40px">
              <Icon name="moon" size="20px" color="gray.800" />
            </Box>
            <span style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              First Goal
            </span>
          </Flex>
        </Grid>
        <Categories nextStep={nextStep} prevStep={prevStep} />
      </Box>
    )
  }
  if (step === 3) {
    return (
      <Box mx="auto">
        <Grid
          templateColumns="1fr 1fr 1fr 1fr 1fr"
          justifyContent="center"
          alignItems="center"
        >
          <Flex d="row" alignItems="center">
            <Box bg="blue.400" borderRadius={50} p={2} mr={2} w="40px" h="40px">
              <Icon name="moon" size="20px" color="blue.800" />
            </Box>
            <span style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Accounts
            </span>
          </Flex>
          <hr style={{ display: "inline", width: "80%" }} />
          <Flex d="row" alignItems="center">
            <Box bg="blue.400" borderRadius={50} p={2} mr={2} w="40px" h="40px">
              <Icon name="moon" size="20px" color="blue.800" />
            </Box>
            <span style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Categories
            </span>
          </Flex>
          <hr style={{ display: "inline", width: "80%" }} />
          <Flex d="row" alignItems="center">
            <Box
              bg="green.400"
              borderRadius={50}
              p={2}
              mr={2}
              w="40px"
              h="40px"
            >
              <Icon name="moon" size="20px" color="green.800" />
            </Box>
            <span style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              First Goal
            </span>
          </Flex>
        </Grid>
        <FirstGoal nextStep={nextStep} prevStep={prevStep} />
      </Box>
    )
  }
  return null
}

export default Stepper
