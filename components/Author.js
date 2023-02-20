import { Flex, Image, Stack, Text } from "@chakra-ui/react";

export function Author() {
  return (
    <Flex
      direction={["column", "column", "row"]}
      p="4"
      alignItems="flex-start"
      justify="space-around"
      mx="auto"
    >
      <Image
        mx="auto"
        borderRadius="full"
        boxSize="96px"
        src="/carlosazaustre.jpg"
        objectFit="cover"
        alt="Carlos Azaustre mirando a cámara con los premios de Google Developer Expert, Microsoft MVP y la placa de Youtube de 100000 suscriptores."
      />
      <Text p="4" textAlign={["center", "center", "left"]}>
        Aprende con{" "}
        <a href="https://twitter.com/carlosazaustre">Carlos Azaustre</a>,
        Ingeniero en Telemática y desarrollador web con más de 10 años de
        experiencia. Formador y profesor universitario.
        <Stack direction="row" spacing={4} p="4" justify="center">
          <Image
            width="75px"
            src="./mvp-logo.png"
            alt="Microsoft MVP"
            title="Premio Microsoft MVP"
          />
          <Image
            width="75px"
            src="./gde-logo.png"
            alt="Google Developer Expert en Tecnologías Web"
            title="Google Developer Expert en Tecnologías Web"
          />
        </Stack>
      </Text>
    </Flex>
  );
}
