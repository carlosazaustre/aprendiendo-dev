import { Container, Heading, Stack, Box } from "@chakra-ui/react";
import { SocialBtn } from "./SocialBtn";

export function Support() {
  return (
    <Box bg="gray.100" textAlign="left" py="8">
      <Container maxW="container.md">
        <Heading as="h3" size="lg" p="4">
          Apoya el contenido
        </Heading>
        <Stack direction="column" spacing={4} p="4">
          <SocialBtn
            social="bmc"
            text="Invítame a un Café"
            url="https://www.buymeacoffee.com/carlosazaustre"
          />
          <SocialBtn
            social="youtube"
            text="Más contenido en YouTube"
            url="https://youtube.com/carlosazaustre?sub_confirmation=1"
          />
          <SocialBtn
            social="twitch"
            text="Sígueme en Twitch"
            url="https://twitch.tv/carlosazaustre"
          />
        </Stack>
      </Container>
    </Box>
  );
}
