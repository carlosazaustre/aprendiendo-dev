import Head from "next/head";
import { Heading, Center, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Wave } from "../components/Wave";

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
        <Center bg="yellow.300" height="85vh" width="100vw">
          <Heading as="h1" size="2xl" p="4">
            aprendiendo
            <Text as="span" color="yellow.600">
              .dev
            </Text>
          </Heading>
        </Center>
        <Wave />
      </main>

      <Footer />
    </div>
  );
}
