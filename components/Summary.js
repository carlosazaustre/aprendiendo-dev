import { Box, Container, Heading, Text } from "@chakra-ui/react";

export function Summary({ questions = [] }) {
  return (
    <Box bg="gray.200" textAlign="left" py="8">
      <Container maxW="container.md">
        {questions?.map((question) => (
          <>
            <Heading as="h3" size="lg" p="4">
              {question.title}
            </Heading>
            <Text as="p" py="2" px="4" fontSize="lg">
              <span
                dangerouslySetInnerHTML={{ __html: question.description }}
              />
            </Text>
          </>
        ))}
      </Container>
    </Box>
  );
}
[];
