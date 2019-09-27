import React from "react"
import {
  Flex,
  IconButton,
  Button,
  Grid,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  Textarea,
} from "@chakra-ui/core"

const FirstGoal = ({ prevStep }) => {
  const setupAccount = () => {
    console.log("setupacc")
  }
  const handleImageClick = () => {
    console.log("click")
  }
  return (
    <Flex direction="column" alignItems="start">
      <p style={{ margin: "1em 0" }}>
        Por último, agrega tu primera meta. Al final de cuentas, para eso estas
        usando FinanceTracker, ¿no? Ese viaje para el que estas ahorrando o ese
        celular nuevo que te quieres comprar.
      </p>
      <Grid
        templateColumns="2fr 2fr 1fr"
        templateRows="1fr auto auto"
        gridColumnGap="1em"
        mb={4}
        as="form"
        onSubmit={setupAccount}
      >
        <FormControl mb={2}>
          <FormLabel id="name">Name</FormLabel>
          <Input type="text" htmlFor="name" />
        </FormControl>
        <FormControl gridRow="2/4" mb={2} d="flex" flexDirection="column">
          <FormLabel id="description">Description</FormLabel>
          <Textarea htmlFor="description" resize="none" h="100%" />
        </FormControl>
        <FormControl mb={2}>
          <FormLabel id="date">Goal Date</FormLabel>
          <Input type="date" htmlFor="date" />
        </FormControl>
        <FormControl mb={2} gridRow="2/3">
          <FormLabel id="amount">Goal Amount</FormLabel>
          <InputGroup>
            <InputLeftAddon children="$" fontWeight="bold" />
            <Input rounded="0" placeholder="Amount" htmlFor="amount" />
            <InputRightAddon
              children="MXN"
              style={{
                fontWeight: 700,
              }}
            />
          </InputGroup>
        </FormControl>
        <FormControl mb={2} gridRow="3/4">
          <FormLabel id="image">Image</FormLabel>
          <InputGroup>
            <Input roundedRight={2} placeholder="photo.jpg" htmlFor="image" />
            <InputRightAddon
              p={0}
              children={
                <Button onClick={handleImageClick}>Upload Image</Button>
              }
            ></InputRightAddon>
          </InputGroup>
        </FormControl>
        <Flex
          direction="row"
          justifyContent="space-between"
          w="100%"
          gridColumn="1/4"
          mt={2}
        >
          <IconButton
            aria-label="Previous Step"
            icon="arrow-back"
            onClick={prevStep}
          />
          <Button rightIcon="arrow-forward" variantColor="blue" type="submit">
            Finalizar
          </Button>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default FirstGoal
