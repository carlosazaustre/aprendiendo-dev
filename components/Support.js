import { Container, Heading, Stack } from "@chakra-ui/react";
import { SocialBtn } from "./SocialBtn";

export function Support() {
  return (
    <Container maxW="container.md" my="8">
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
  );
}
