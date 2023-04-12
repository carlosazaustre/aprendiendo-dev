import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  AspectRatio,
  List,
  ListItem,
  ListIcon,
  Badge,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export function LessonItem({ title, videoId, description, topics, isNew }) {
  return (
    <AccordionItem borderColor="yellow.300">
      <h2>
        <AccordionButton
          color="yellow.300"
          h="65px"
          _expanded={{ bg: "yellow.300", color: "gray.900" }}
        >
          <Text
            as="h4"
            fontSize="lg"
            //color="yellow.300"
            flex="1"
            textAlign="left"
          >
            {title}
            {isNew ? (
              <Badge colorScheme="green" ml={2}>
                Nuevo
              </Badge>
            ) : (
              ""
            )}
          </Text>

          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Text as="p" p="4">
          {description}
        </Text>
        <AspectRatio maxW="560px" ratio={16 / 9} mx="auto">
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          />
        </AspectRatio>
        <List p="4" spacing="2">
          {topics?.map((topic) => (
            <ListItem key={topic}>
              <ListIcon as={MdCheckCircle} color="yellow.400" />
              {topic}
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
}
