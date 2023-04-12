import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Syllabus } from "./Syllabus";

export function LessonList({ title, subtitle, lessons = [] }) {
  return (
    <Box
      as="div"
      id="lessons"
      bg="gray.900"
      w="100%"
      h="auto"
      textAlign="left"
      px="4"
      py="8"
      textColor="white"
    >
      <Container maxW="container.md">
        <Heading as="h3" size="lg" p="4">
          {title}
        </Heading>
        <Text as="p" size="md" p="4">
          {subtitle}
        </Text>
        <Syllabus lessons={lessons} />
      </Container>
    </Box>
  );
}
