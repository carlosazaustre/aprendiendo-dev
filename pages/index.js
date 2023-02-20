import Head from "next/head";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>aprendiendo.dev</title>
        <meta
          name="description"
          content="Aprende Programación Web y JavaScript con Carlos Azaustre"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box bg="yellow.300" height="90vh" width="100vw">
          <Heading as="h1" size="2xl" p="4">
            <Box my="20%" mx="auto" align="center">
              aprendiendo.dev
            </Box>
          </Heading>
        </Box>
      </main>

      <Footer />
    </div>
  );
}
