import React, { useState } from "react"
import { Box } from "@chakra-ui/core"
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
        <Accounts nextStep={nextStep} prevStep={prevStep} />
      </Box>
    )
  }
  if (step === 2) {
    return (
      <Box mx="auto">
        <Categories nextStep={nextStep} prevStep={prevStep} />
      </Box>
    )
  }
  if (step === 3) {
    return (
      <Box mx="auto">
        <FirstGoal nextStep={nextStep} prevStep={prevStep} />
      </Box>
    )
  }
  return null
}

export default Stepper
