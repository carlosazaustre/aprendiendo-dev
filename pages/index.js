import Head from "next/head";
import { Heading, Center, Text } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Wave } from "../components/Wave";
import { Courses } from "../components/Courses";

import javascript from "../data/javascript.json";

export async function getStaticProps() {
  const data = [javascript];
  return {
    props: {
      courses: data,
    },
  };
}

export default function Home({ courses }) {
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
        <Center bg="yellow.300" width="100%">
          <div>
            <Heading as="h1" size="2xl" pt="16" pb="4" textAlign="center">
              aprendiendo
              <Text as="span" color="yellow.600">
                .dev
              </Text>
            </Heading>
            <Heading as="h2" size="lg" textAlign="center">
              Cursos Online de Programación Web y JavaScript
            </Heading>
          </div>
        </Center>
        <Wave theme="javascript" position="down" />
        <Courses courses={courses} />
      </main>

      <Footer />
    </div>
  );
}
