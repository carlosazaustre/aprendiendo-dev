import { Box, Link } from "@chakra-ui/react";
import { TwitterShareBtn } from "./TwitterShareBtn";

export function Footer() {
  return (
    <Box as="footer" textAlign="center" p="4">
      Un proyecto de{" "}
      <Link color="yellow.600" href="https://carlosazaustre.es">
        Carlos Azaustre
      </Link>{" "}
      hecho con 💛 y Next.js
      <TwitterShareBtn
        url="https://aprendiendo.dev/javascript"
        title={`Aprende JavaScript con @carlosazaustre.
¡Mira cómo 👇!`}
      />
    </Box>
  );
}
