import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "../theme.js"
import {
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
  Input,
  Heading,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  IconButton,
} from "@chakra-ui/core"

const styleGuide = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Layout>
      <SEO title="Finance Tracker | Inicio" />
      <Box
        className="typograhpy"
        style={{ fontFamily: "Poppins" }}
        p={2}
        style={{ maxWidth: "500px" }}
      >
        <Heading as="h1" size="2xl">
          Heading 1
        </Heading>
        <Heading as="h2" size="xl">
          Heading 2
        </Heading>
        <Heading as="h3" size="lg">
          Heading 3
        </Heading>
        <Heading as="h4" size="md">
          Heading 4
        </Heading>
        <p style={{ fontWeight: 400 }}>Paragraph - Regular</p>
        <p style={{ fontWeight: 600 }}>Paragraph - Medium</p>
        <p style={{ fontWeight: 700 }}>Paragraph - Bold</p>
      </Box>
      <hr />
      <Box
        className="buttons"
        style={{ fontFamily: "Poppins" }}
        p={2}
        style={{ maxWidth: "500px" }}
      >
        <p>Buttons</p>
        <Button variantColor="blue" m={2}>
          Button
        </Button>
        <Button variantColor="blue" variant="outline" m={2}>
          Button
        </Button>
        <Button variantColor="blue" variant="link" m={2}>
          Button
        </Button>
        <IconButton
          variantColor="blue"
          aria-label="Search database"
          icon="search"
          isRound="true"
        />
      </Box>
      <hr />
      <Box
        className="inputs"
        style={{ fontFamily: "Poppins" }}
        p={2}
        style={{ maxWidth: "500px" }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            id="email"
            aria-describedby="email-helper-text"
            variantColor="blue"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Amount</FormLabel>
          <InputGroup>
            <InputLeftAddon
              style={{
                backgroundColor: "#2168DD",
              }}
              children={<Icon name="info" color="white" />}
            />
            <Input rounded="0" placeholder="amount" />
            <InputRightAddon
              children="MXN"
              style={{
                backgroundColor: "#2168DD",
                color: "white",

                fontWeight: 700,
              }}
            />
          </InputGroup>
          <InputGroup my={4}>
            <Input placeholder="foto.jpg" />
            <InputRightElement w="auto">
              <Button
                variantColor="blue"
                style={{ borderRadius: "0 5px 5px 0" }}
              >
                Cargar
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Box>
      <Box
        style={{ fontFamily: "Poppins" }}
        p={2}
        style={{ maxWidth: "500px" }}
      >
        <Stat>
          <StatLabel>Total</StatLabel>
          <StatNumber>$700MXN</StatNumber>
        </Stat>
      </Box>
    </Layout>
  </ThemeProvider>
)

export default styleGuide
