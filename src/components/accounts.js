import React, { useState } from "react"
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Flex,
  Grid,
} from "@chakra-ui/core"

const Accounts = ({ nextStep, prevStep }) => {
  const [accounts, setAccounts] = useState([{ id: "1", name: "", balance: "" }])
  const addAccountInput = () => {
    setAccounts(accounts => [...accounts, {}])
  }
  const submitAccounts = () => {
    console.log("submit")
    nextStep()
  }
  return (
    <Flex direction="column" alignItems="start">
      <p style={{ margin: "1em 0" }}>
        Tu dinero puede estar distribuido en diferentes lugares. ¡Escribe todos
        los lugares donde guardas tu dinero! Pueden ser ahorros, las diferentes
        tarjetas de crédito o débito que utilices, etc.
      </p>
      <Grid
        as="form"
        onSubmit={submitAccounts}
        templateColumns="2fr 2fr 1fr"
        templateRows="1fr auto"
        gridColumnGap="1em"
      >
        {accounts.map((account, index) => {
          return (
            <>
              <FormControl mb={2} gridColumn="1/2">
                <FormLabel
                  id={"name-" + index}
                  d={index === 0 ? "block" : "none"}
                >
                  Account Name
                </FormLabel>
                <Input type="text" htmlFor={"name-" + index} />
              </FormControl>
              <FormControl mb={2} gridColumn="2/3">
                <FormLabel
                  id={"balance-" + index}
                  d={index === 0 ? "block" : "none"}
                >
                  Initial Balance
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon children="$" fontWeight="bold" />
                  <Input
                    rounded="0"
                    placeholder="Balance"
                    htmlFor={"balance-" + index}
                  />
                  <InputRightAddon
                    children="MXN"
                    style={{
                      fontWeight: 700,
                    }}
                  />
                </InputGroup>
              </FormControl>
            </>
          )
        })}
        <Button
          leftIcon="add"
          variant="link"
          style={{ display: "block", gridColumn: "1/3" }}
          my={2}
          ml="auto"
          onClick={addAccountInput}
        >
          New Account
        </Button>
        <Flex
          direction="row"
          justifyContent="flex-end"
          w="100%"
          gridColumn="1/4"
        >
          {/*<IconButton
            aria-label="Previous Step"
            icon="arrow-back"
            onClick={prevStep}
          />*/}
          <Button rightIcon="arrow-forward" variantColor="blue" type="submit">
            Siguiente
          </Button>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Accounts
