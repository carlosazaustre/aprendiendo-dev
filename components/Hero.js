import { Box, Container, Heading, Image, Button } from "@chakra-ui/react";
import { Author } from "./Author";
import { COLOR_THEME } from "../utils/constants";

export function Hero({ theme, title, description, image, imageAlt }) {
  return (
    <Box bg={COLOR_THEME[theme]} textAlign="center">
      <Container maxW="container.md">
        <Image src={image} alt={imageAlt} m="auto" />
        <Heading as="h1" size="2xl" p="4">
          {title}
        </Heading>
        <Heading as="h2" size="md" p="4" color="gray.600">
          {description}
        </Heading>
        <Button as="a" href="/3" bg="black" color="white" size="lg" p="4">
          ¡Quiero empezar!
        </Button>
        <Author />
      </Container>
    </Box>
  );
}
