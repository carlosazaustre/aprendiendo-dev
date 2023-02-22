import { SimpleGrid, Container, Heading } from "@chakra-ui/react";
import { Card } from "../components/Card";

export function Courses({ courses }) {
  return (
    <Container
      display="flex"
      alignItems="center"
      flexDir="column"
      maxW="container.md"
    >
      <SimpleGrid columns={[1, 1, 2, 3]} gap="30px">
        {courses.map((course) => (
          <Card
            key={course?.info?.theme}
            title={course?.info?.title}
            imageOg={course?.info?.imageOg}
            imageAlt={course?.info?.imageAlt}
            theme={course?.info?.theme}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
