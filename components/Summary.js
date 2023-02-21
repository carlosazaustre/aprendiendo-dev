import { Container, Heading, Text } from "@chakra-ui/react";

export function Summary({ questions = [] }) {
  return (
    <Container maxW="container.md" mb="8">
      {questions?.map((question) => (
        <>
          <Heading as="h3" size="lg" p="4" pt="0">
            {question.title}
          </Heading>
          <Text as="p" py="2" pb="8" px="4" fontSize="lg">
            <span dangerouslySetInnerHTML={{ __html: question.description }} />
          </Text>
        </>
      ))}
    </Container>
  );
}
[];
