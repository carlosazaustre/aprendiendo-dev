import { Heading, Button, Box, Image } from "@chakra-ui/react";
import NextLink from "next/link";

export function Card({ title, imageOg, imageAlt, theme }) {
  return (
    <Box boxShadow="base" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`/${imageOg}`} alt={imageAlt} />

      <Box
        p="1rem"
        display="flex"
        alignItems="center"
        flexDir="column"
        gap="1rem"
      >
        <Heading align="center" size="md" fontWeight="semibold" as="h3">
          {title}
        </Heading>

        <Button
          bg="black"
          _hover={{ bg: "#f0dc4d", color: "black" }}
          color="white"
          size="md"
          as={NextLink}
          href={`/${theme}`}
        >
          Ir al curso
        </Button>
      </Box>
    </Box>
  );
}
