import React, { useState } from "react"
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Icon,
  Flex,
  Grid,
  IconButton,
} from "@chakra-ui/core"

const Categories = ({ nextStep, prevStep }) => {
  const [categories, setCategories] = useState([
    { id: "1", name: "", icon: "" },
  ])
  const addCategoryInput = () => {
    setCategories(categories => [...categories, {}])
  }
  const submitCategories = () => {
    console.log("submit")
    nextStep()
  }
  return (
    <Flex direction="column" alignItems="start">
      <p style={{ margin: "1em 0" }}>
        De igual manera tus gastos pueden tener diferentes categorías. Agrega
        todas las que creas necesarias. Puedes también seleccionar los íconos
        que más te ayuden a recordar qué es cada categoría.
      </p>
      <Grid
        as="form"
        onSubmit={submitCategories}
        templateColumns="2fr 2fr 1fr"
        templateRows="1fr auto"
        gridColumnGap="1em"
      >
        {categories.map((category, index) => {
          return (
            <>
              <FormControl mb={2} gridColumn="1/2">
                <FormLabel
                  id={"name-" + index}
                  d={index === 0 ? "block" : "none"}
                >
                  Category
                </FormLabel>
                <Input type="text" htmlFor="category" />
              </FormControl>
              <FormControl mb={2} gridColumn="2/3">
                <FormLabel
                  id={"icon-" + index}
                  d={index === 0 ? "block" : "none"}
                >
                  Icon
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon children="$" />
                  <Input rounded="0" placeholder="Balance" htmlFor="icon" />
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
          onClick={addCategoryInput}
        >
          New Category
        </Button>
        <Flex
          direction="row"
          justifyContent="space-between"
          w="100%"
          gridColumn="1/4"
        >
          <IconButton
            aria-label="Previous Step"
            icon="arrow-back"
            onClick={prevStep}
          />
          <Button rightIcon="arrow-forward" variantColor="blue" type="submit">
            Siguiente
          </Button>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Categories
