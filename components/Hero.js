import { Box, Container, Heading, Image, Button, Text } from "@chakra-ui/react";
import { Author } from "./Author";
import { COLOR_THEME } from "../utils/constants";

export function Hero({ theme, title, description, image, imageAlt }) {
  return (
    <Box bg={COLOR_THEME[theme]} textAlign="center">
      <Container maxW="container.md">
        <Image src={image} alt={imageAlt} m="auto" />
        <Heading as="h1" size="2xl" py="8">
          {title}
        </Heading>
        <Text as="h2" fontSize="xl" p="4" color="gray.600">
          {description}
        </Text>
        <Button as="a" href="#lessons" bg="black" color="white" size="lg" p="4">
          ¡Comenzar ahora!
        </Button>
        <Author />
      </Container>
    </Box>
  );
}
