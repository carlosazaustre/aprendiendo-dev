import { Box, Container, Heading } from "@chakra-ui/react";
import { Syllabus } from "./Syllabus";

export function LessonList({ title, lessons = [] }) {
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
        <Syllabus lessons={lessons} />
      </Container>
    </Box>
  );
}
