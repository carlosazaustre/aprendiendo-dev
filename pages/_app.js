import { Poppins } from "@next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const poppins = Poppins({
  weight: ["300", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = extendTheme({
  fonts: {
    body: poppins.style.fontFamily,
    heading: poppins.style.fontFamily,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
