import { Accordion } from "@chakra-ui/react";
import { LessonItem } from "./LessonItem";

export function Syllabus({ lessons = [] }) {
  return (
    <Accordion allowToggle>
      {lessons?.map((lesson) => (
        <LessonItem key={lesson.title} {...lesson} />
      ))}
    </Accordion>
  );
}
