import { theme } from "@chakra-ui/core"

export const customTheme = {
  ...theme,
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  sizes: {
    ...theme.sizes,
    half: "50%",
  },
  colors: {
    ...theme.colors,
    blue: {
      100: "#E9F0FC",
      200: "#C8D9F7",
      300: "#A6C3F1",
      400: "#6495E7",
      500: "#2168DD",
      600: "#1E5EC7",
      700: "#143E85",
      800: "#0F2F63",
      900: "#0A1F42",
    },
    green: {
      100: "#F3FAF1",
      200: "#E2F2DC",
      300: "#D0E9C7",
      400: "#ADD99D",
      500: "#8AC973",
      600: "#7CB568",
      700: "#537945",
      800: "#3E5A34",
      900: "#293C23",
    },
    red: {
      100: "#FBEFEF",
      200: "#F5D6D6",
      300: "#EFBDBD",
      400: "#E28C8C",
      500: "#D65A5A",
      600: "#C15151",
      700: "#803636",
      800: "#602929",
      900: "#401B1B",
    },
    yellow: {
      100: "#FDFAF1",
      200: "#FAF3DC",
      300: "#F6ECC7",
      400: "#F0DD9C",
      500: "#E9CF72",
      600: "#D2BA67",
      700: "#8C7C44",
      800: "#695D33",
      900: "#463E22",
    },
    grey: {
      100: "#EAEBEB",
      200: "#CBCCCD",
      300: "#ABADAF",
      400: "#6D7074",
      500: "#2E3238",
      600: "#292D32",
      700: "#1C1E22",
      800: "#151719",
      900: "#0E0F11",
    },
  },
}

export default customTheme
