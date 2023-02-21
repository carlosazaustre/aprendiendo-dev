import { SimpleGrid, Container, Heading } from "@chakra-ui/react";
import { Card } from "../components/Card";

export function Courses({ courses }) {
  return (
    <Container display="flex" alignItems="center" flexDir="column" maxW="100%">
      <Heading as="h2" size="2xl" pb="8">
        Cursos
      </Heading>
      <SimpleGrid maxW="100vw" minChildWidth="400px" gap="30px">
        {courses.map((course) => (
          <Card
            key={course.info.theme}
            title={course.info.title}
            imageOg={course.info.imageOg}
            imageAlt={course.info.imageAlt}
            theme={course.info.theme}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
