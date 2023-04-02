import { Text, Link, Center } from "@chakra-ui/react";
import { TwitterShareBtn } from "./TwitterShareBtn";

export function Footer({ courseId = "", courseName = "Programación Web" }) {
  return (
    <Center as="footer" p="4" h="140px">
      <Text>
        Un proyecto de{" "}
        <Link color="yellow.600" href="https://carlosazaustre.es">
          Carlos Azaustre
        </Link>{" "}
        hecho con 💛 y Next.js
      </Text>
      <TwitterShareBtn
        url={`https://aprendiendo.dev/${courseId}`}
        title={`Aprende ${courseName} con @carlosazaustre.
¡Mira cómo 👇!`}
      />
    </Center>
  );
}
